import React from 'react'
import './aboutme.css'
import MOI from '../../assets/LinkedIn-profilepic.jpg'
import { GiTakeMyMoney, GiGraduateCap } from 'react-icons/gi'
import { MdOutlineInterests } from 'react-icons/md'

const AboutMe = () => {
  return (
    <section id='about'>
    <h5>Wanna know more</h5>
    <h2>About me</h2>
    <div className="container_aboutme">
      <div className="aboutme">
        <div  className='about-me-image'>
        <img src={MOI} alt="my flower face" />
        </div>
      </div>

      <div className="aboutme__text">
        <div className="aboutme__text__container">
          <article className='aboutme-cards'>
          <GiTakeMyMoney className='about-icon'/>
          <h5>Experience</h5>
          <small>Accounting and Finance Grad</small>
          </article>

          <article className='aboutme-cards'>
          {/* space for icon if we wanna add later */}
          <GiGraduateCap className='about-icon'/>
          <h5>School of Code Bootcamp Cohort 14</h5>
          <small>Full-stack developer</small>
          </article>

          <article className='aboutme-cards'>
          <MdOutlineInterests className='about-icon'/>
          <h5>Interests</h5>
          <small>Gaming</small><br/>
          <small>Cooking/Baking</small>
          </article>
        </div>
        <br />
      <p>
        Hello there, my name is Tripti. I am a full-stack developer based in Farnborough, UK. I have a background in Accounting and Finance but was seeking to learn something different and after being egged on by my friends I decided to take on the challenge of learning to code and take a step into the  tech world.
          <br />
        I am currently a student of the School of Code Bootcamp Cohort 14(to graduate this Aug 2023), where I learned a variety of skills from the the full stack <br/>
        I am passionate about creating applications that are user-friendly and accessible to all. I am currently looking for a role as a junior developer.
      </p>
     <br />
      <a href="#contact" className='btn btn-primary'> Talk to me </a>
     
      </div>
    </div>
    </section>
  )
}

export default AboutMe