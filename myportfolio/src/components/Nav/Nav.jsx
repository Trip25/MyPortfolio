import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#home" className="nav__link"><BiHomeHeart/>Home</a>
      <a href="#about" className="nav__link"><BiHomeHeart/>About Me</a>
      <a href="#experience" className="nav__link"><BiHomeHeart/>Experience</a>
      <a href="#project" className="nav__link"><BiHomeHeart/>Projects</a>
      <a href="#contact" className="nav__link"><BiHomeHeart/>Contact</a>
    </nav>
  )
}

export default Nav