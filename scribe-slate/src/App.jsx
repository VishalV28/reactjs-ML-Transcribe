import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './components/HomePage'
import Header from './components/Header'

function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function resetAudio() {
    setFile(null)
    setAudioStream(null)
  }

  return (
    <div className='flex flex-col mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        <HomePage setFile={setFile} setAudioStream={setAudioStream}/>
      </section>
      <h1></h1>
      <footer>Hello</footer>
    </div>
  )
}

export default App
