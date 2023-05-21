import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/tripti-gurung-294089a6/' target='_blank' ><BsLinkedin /> </a>
        <a href='https://github.com/Trip25' target='_blank' ><BsGithub/></a>
        <a href='https://twitter.com/TriptiGuru87880' target='_blank' ><BsTwitter/></a>
        {/* 
        <a href='' target='_blank' ></a> */}
    </div>
  )
}

export default HeaderSocial