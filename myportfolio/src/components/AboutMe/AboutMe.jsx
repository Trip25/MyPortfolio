import React from 'react'
import './aboutme.css'
import MOI from '../../assets/LinkedIn-profilepic.jpg'
import { GiTakeMyMoney, GiGraduateCap } from 'react-icons/gi'
import { MdOutlineInterests } from 'react-icons/md'

const AboutMe = () => {
  return (
    <section id='about'>
    <p className="text-light">Wanna know more</p>
    <h2>About me</h2>
    <div className="container_aboutme">
      <div className="aboutme">
        <div  className='about-me-image'>
        <img src={MOI} alt="Tripti Gurung profile picture" />
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
      <p className='paragraph'>
        Hi there, my name is Tripti. 
        <br />
        So I've had a pretty non-traditional path, coming from an Accounting and Finance background. I've took a step into the tech world, taking a chance with <a href='https://codefirstgirls.com/'>Code First Girls</a>, learning some amazing data manipulation, learning to clean data and making it usable with the likes of python, matplotlib, tableau and Power BI. I really loved being able to visualise the data and tell a story with it.
        <br />
        Then I took another bootcamp into another field of tech and learn all about Full stack Development with <a href='https://schoolofcode.co.uk/'>School of Code</a> becoming part of cohort 14. It was an amazing tough experience and I made lifelong friends.
        <br />
        Which leads onto now, where I am currently working for KFC as an Engineer based in the Menu Platform team, ensuring everything is working for the staff in restaurants but also the lovely customers who love chicken!
        <br />
        I'm working hard to make sure I keep up with the trends and am actively working on getting my AWS certifications!
      </p>
     <br />
      <a href="#contact" className='btn btn-primary'> Talk to me </a>
     
      </div>
    </div>
    </section>
  )
}

export default AboutMe