import { useState } from 'react'
import Header from './components/00_Header/Header'
import About from './components/01_About/About'
function App() {
  return (
    <>
    <Header/>
    <div className='flex justify-center items-center'>
    <About/>
    </div>
    
    </>
  )
}

export default App
