import React from 'react'
import './projects.css'
import king from '../../assets/Vegeta.jpeg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My recent work</h5>
      <h2>Projects</h2>
    <div className='container projects-container'>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 1' />
    </div>
    <h3>Project 1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 2' />
    </div>
    <h3>Project 2</h3>
    <p>Loading... jk</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 3' />
    </div>
    <h3>Project 3</h3>
    <p>Waitforit</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 4' />
    </div>
    <h3>Project 4</h3>
    <p>Nope, yh I know I need to work on it</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 5' />
    </div>
    <h3>Project 5</h3>
    <p>Coming Soon</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 6' />
    </div>
    <h3>Project 6</h3>
    <p>Coming Soon</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://github.com' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    {/* close container div */}
    </div>





    </section>
  )
}

export default Projects