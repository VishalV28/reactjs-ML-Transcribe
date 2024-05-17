import React, { useRef, useState } from 'react'

export default function HomePage(props) {
  const {setAudioStream, setFile} = props

  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [audioChunks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0)

  const mediaRecorder = useRef(null)
  
  const mimeType = 'audio/webm'

  async function startRecording() {
      let tempStream
      console.log('Start recording')

      try{
        //get media from device
        const streamData = await navigator.mediaDevices.getUserMedia({ 
            audio: true, 
            video: false
        })
        tempStream = streamData
      } catch(err) {
        console.log(err.message)
        return
      }
      setRecordingStatus('recording')
      //Create new recorder instance using stream
      const media = new MediaRecorder(tempStream, {type: mimeType})
      mediaRecorder.current = media 

      mediaRecorder.current.start()
      let localAudioChunks = []
      mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === 'undefined') { return }
            if (event.data.size === 0) { return }
            localAudioChunks.push(event.data)
      }
      setAudioChunks(localAudioChunks)
  }

  async function stopRecording() {
    setRecordingStatus('inactive')
    console.log('Stop recording')

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: mimeType })
        setAudioStream(audioBlob)
        setAudioChunks([])
        setDuration(0)
    }
  }

  return (
    <main className='flex flex-col flex-1 p-2 gap-3 sm:gap-4 md:gap-5 justify-center text-center bg-violet-200 pb-20'>
      <h1 className='p-3 font-bold text-5xl sm:text-6xl md:text-7xl text-sky-500'>Scribe<span className='text-sky-500/50'>Slate</span></h1>
      <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'>&rarr;</span> Transcribe <span className='text-blue-400'>&rarr;</span> Translate</h3>
      <button className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4' onClick={recordingStatus === 'recording' ? stopRecording : startRecording}>
        <p className='text-blue-400'>{recordingStatus === 'inactive' ? 'Record' : `Stop recording`}</p>
        <div className='flex items-center gap-2'>
                    {/* {duration !== 0 && (
                        <p className='text-sm'>{duration}s</p>
                    )} */}
            <i className={"fa-solid duration-200 fa-microphone " + (recordingStatus === 'recording' ? ' text-rose-300' : "")}></i>
        </div>
      </button>
      <p>Or</p>
      <p className='italic text-slate-400'>Free now free forever</p>
    </main>
  )
}
