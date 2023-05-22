import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills do I have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
        <article className='experience__article'>
          {/* To ADD 
          HTML CSS JAVASCRIPT REACT  */}
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>JavaScript</h4>
          <h4>React</h4>
        </article>
        </div>
      </div>
      <div className='experience__backend'>
        <h3 >Backend Development</h3>
        <div className='experience__content'>
        <article className='experience__article'>
        {/* To ADD 
          SQL databases  */}
          <h4>SQL</h4>
          <h4>PostGreSQL</h4>
        </article>
        </div>
      </div>
      <div className='experience__other'>
        <h3>Other</h3>
        <div className='experience__content'>
        <article className='experience__article'>
        {/* To ADD 
          GIT GITHUB TESTING? JEST PLAYWRIGHT VERCEL*/}
          <h4>Git</h4>
          <h4>Github</h4>
          <h4>Jest</h4>
          <h4>Playwright</h4>
        </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience