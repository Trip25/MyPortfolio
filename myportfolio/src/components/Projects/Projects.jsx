import React from 'react'
import './projects.css'
import king from '../../assets/Vegeta.jpeg' //remove this placeholder image
import scrip4 from '../../assets/Scriptastic4-MemoryJogger.png' 
import fakestore from '../../assets/Fakestore.png'
import recipe from '../../assets/Eataholic-RecipeStorer.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My recent work</h5>
      <h2>Projects</h2>
    <div className='container projects-container'>

    <article className='project-card'>
    <div className='project-image'>
      <img src={scrip4} alt='project 1' />
    </div>
    <h3>Scriptastic4- Memory Jogger</h3>
    <p>School of Code Week7 Front Eng Project in a group of 4</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com/Trip25/Scriptastic4-MemoryJogger' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://scriptastic4-memory-jogger-9lkw02ohy-trip25.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={fakestore} alt='project 2' />
    </div>
    <h3>Fake Store</h3>
    <p>My School of Code week 8 hackathon, my team and I decided to go for the E-commerce Fake-store API as the Map API was closing at end of May 2023</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com/Trip25/FakeStore' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://fake-store-j38nmwt86-trip25.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
    {/* TODO: add links to github and deployment site */}
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={recipe} alt='project 3' />
    </div>
    <h3>Eataholic- Recipe Storer</h3>
    <p>Build a backend using CRUD, serves to store recipes!</p>
    <div className='project-item-cta'>
    {/* eslint-disable-next-line */}
    <a href='https://github.com/Trip25/RecipeStorer' className='btn' target='_blank'>Link to Github page</a>
    {/* eslint-disable-next-line */}
    <a href='https://recipe-storer-e1ehzjga1-trip25.vercel.app/' className='btn btn-primary' target='_blank'>Live demo</a>
    </div>
    </article>

    <article className='project-card'>
    <div className='project-image'>
      <img src={king} alt='project 4' />
    </div>
    <h3>Weather API App</h3>
    <p>Coming Soon!</p>
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