import React from 'react'
import './aboutme.css'
import MOI from '../../assets/LinkedIn-profilepic.jpg'

const AboutMe = () => {
  return (
    <section id='about'>
    <h5>Wanna know me</h5>
    <h2>About me</h2>
    <div className="container_aboutme">
      <div className="aboutme">
        <div  className='about-me-image'>
        <img src={MOI} alt="my flower face" />
        </div>
      </div>

      <div className="aboutme__text">
        <div className="aboutme__text__container">
          <article className=''>
          {/* space for icon if we wanna add later */}
          <h5>Hi, I'm Tripti Gurung</h5>
          <small>Full Stack Developer</small>
          </article>

          <article className=''>
          {/* space for icon if we wanna add later */}
          <h5>Finance</h5>
          <small>degree</small>
          </article>

          <article className=''>
          {/* space for icon if we wanna add later */}
          <h5>Bootcamper</h5>
          <small>Gamer</small>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default AboutMe