import React from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App