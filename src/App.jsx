import { useState } from 'react'
import './styles/index.css'
import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Contact from './sections/contact'
import Footer from './sections/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
