import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FaUserAstronaut} from 'react-icons/fa'
import {BsFillRocketTakeoffFill} from 'react-icons/bs'
import {GoDeviceCamera, GoCommentDiscussion} from 'react-icons/go'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="nav">
    {/* eslint-disable-next-line */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><BiHomeHeart/></a>
    {/* FYI if I come to forget, the disable is needed as it doesn't like the empty # above */}
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUserAstronaut/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsFillRocketTakeoffFill/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><GoDeviceCamera/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><GoCommentDiscussion/></a>
    </nav>
  )
}

export default Nav