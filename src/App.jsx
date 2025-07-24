import Header from './components/00_Header/Header'
import About from './components/01_About/About'
import Projects from './components/02_Projects/Projects'
import Blog from './components/03_Blog/Blog'
import Resume from './components/04_Resume/Resume'
import Contact from './components/05_Contact/Contact'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <div className='flex justify-center items-center'>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
