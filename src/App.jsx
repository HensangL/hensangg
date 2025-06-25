import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Skills from './Pages/Skills'
import Footer from './Pages/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App