import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4 bg-slate-100'>
        <a href="/"><h1 className='font-medium'>ScribeSlate</h1>
        </a>
        <div className='gap-4 flex items-center '>
            <a></a>
            <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400 bg-slate-100/25 border-2'>
                <p>New</p>
                <i className="fa-solid fa-plus"></i> 
            </a>
        </div>
    </header>
  )
}

// Change icons and header bar