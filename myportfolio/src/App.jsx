import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark mode

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
  }, [theme]);

  return (
    <>
        <Header theme={theme} toggleTheme={toggleTheme} />
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