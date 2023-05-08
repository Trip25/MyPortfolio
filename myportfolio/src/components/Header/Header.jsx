import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/LinkedIn profilepic.jpg'
import ME from '../../assets/trippyfinal.png'
import HeaderSocial from './/HeaderSocial.jsx'

const Header = () => {
  return (
    <header> 
    {/* HEADER */}
      <div className="container header__container"> 
      <h5>Hey, my name is</h5>
      <h1>Tripti Gurung</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA />
      <HeaderSocial />
      {/* ABOUT ME */}
      <div className='moi'>
        <img src={ME} alt="moi" />
      </div>
      <a href='#contact' className='scroll_down'>Scroll down</a>

      
      </div>
    </header>
  )
}

export default Header