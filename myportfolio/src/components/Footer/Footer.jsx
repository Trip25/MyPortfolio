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
<a href='https://www.linkedin.com/in/tripti-g-294089a6/' target='_blank' ><BsLinkedin /> </a>
<a href='https://github.com/Trip25' target='_blank' ><BsGithub/></a>
<a href='https://twitter.com/TriptiGuru87880' target='_blank' ><BsTwitter/></a>
</div>
<div className='footer__copyright'><small>&copy;Tripti "Please give me a job" June 2023</small></div>
    </footer>
  )
}

export default Footer