import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>TRIPS</a>

<ul className='permalinks'>
<li><a href='#' >Home</a></li>
<li><a href='#about' >About Me</a></li>
<li><a href='#experience' >Experience</a></li>
<li><a href='#projects' >Projects</a></li>
<li><a href='#contact' >Contact Me</a></li>
</ul>
<div className='footer__socials'>
<a href='https://www.linkedin.com/in/tripti-g-294089a6/' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn"><BsLinkedin /> </a>
<a href='https://github.com/Trip25' target='_blank' rel="noopener noreferrer" aria-label="GitHub"><BsGithub/></a>
<a href='https://twitter.com/TriptiGuru87880' target='_blank' rel="noopener noreferrer" aria-label="Twitter"><BsTwitter/></a>
</div>
<div className='footer__copyright'><small>&copy; Tripti Gurung July 2023</small></div>
    </footer>
  )
}

export default Footer