import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/trippyfinal.png'
import HeaderSocial from './/HeaderSocial.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header> 
    {/* HEADER */}
      <div className="container header__container"> 
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <p>Hey, my name is</p>
      <h1>Tripti Gurung</h1>
      <h2 className='text-light'>Full Stack Developer</h2>
      <CTA />
      <HeaderSocial />
      {/* ABOUT ME */}
      <div className='moi'>
        <img src={ME} alt="Tripti Gurung - Full Stack Developer" />
      </div>
      <a href='#contact' className='scroll_down'>Scroll down</a>

      
      </div>
    </header>
  )
}

export default Header