import React, { useRef, useState } from 'react'

export default function HomePage(props) {
  const {setAudioStream, setFile} = props

  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [audioChunks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0)

  const mediaRecorder = useRef(null)
  

  return (
    <main className='flex flex-col flex-1 p-2 gap-3 sm:gap-4 md:gap-5 justify-center text-center bg-violet-200 pb-20'>
      <h1 className='p-3 font-bold text-5xl sm:text-6xl md:text-7xl text-sky-500'>Scribe<span className='text-sky-500/50'>Slate</span></h1>
      <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'>&rarr;</span> Transcribe <span className='text-blue-400'>&rarr;</span> Translate</h3>
      <button className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
        <p className='text-blue-400'></p>
        <div className='flex items-center gap-2'>
                    {/* {duration !== 0 && (
                        <p className='text-sm'>{duration}s</p>
                    )} */}
            <i></i>
        </div>
      </button>
      <p>Or</p>
      <p className='italic text-slate-400'>Free now free forever</p>
    </main>
  )
}
