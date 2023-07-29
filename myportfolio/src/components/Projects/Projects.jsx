import React from 'react'
import './projects.css'
import king from '../../assets/Vegeta.jpeg' //remove this placeholder image
import scrip4 from '../../assets/Scriptastic4-MemoryJogger.png' 
import fakestore from '../../assets/Fakestore.png'
import recipe from '../../assets/Eataholic-RecipeStorer.png'
import storyscape from '../../assets/storyscape.png'

//Will need to import images for each project


//SWIPER IMPORTS
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//NOTE TO SELF NEED TO UPDATE IN THE PROJECTS TO THE DATA ARRAY
const data = [
  {
    id: 1,
    image: scrip4,
    title: 'Scriptastic4- Memory Jogger',
    text: 'School of Code Week7 Front Eng Project in a group of 4',
    github: 'https://github.com/Trip25/Scriptastic4-MemoryJogger',
    live: 'https://scriptastic4-memory-jogger-9lkw02ohy-trip25.vercel.app/'
  },
  {
    id: 2,
    image: fakestore,
    title: 'Fake Store',
    text: 'My School of Code week 8 hackathon, my team and I decided to go for the E-commerce Fake-store API as the Map API was closing at end of May 2023',
    github: 'https://github.com/Trip25/FakeStore',
    live: 'https://fake-store-j38nmwt86-trip25.vercel.app/'
  },
  {
    id: 3,
    image: recipe,
    title: 'Eataholic- Recipe Storer',
    text: 'Build a backend using CRUD, serves to store recipes!',
    github: 'https://github.com/Trip25/RecipeStorer',
    live: 'https://recipe-storer-e1ehzjga1-trip25.vercel.app/'
  },
  {
    id: 4,
    image: storyscape,
    title: 'SOC Final Project: StoryScape',
    text: '5 week project working in a group of 6, keep all your precious stories from your relatives here!',
    github: 'https://github.com/SOC-System-32/StoryScape-Frontend/tree/main',
    live: 'https://storyscape.netlify.app/'
  },
  {
    id: 5,
    image: king,
    title: 'Project 5', 
    text: 'Coming Soon',
    github: 'https://github.com',
    live: 'https://github.com'
  },
  {
    id: 6,
    image: king,
    title: 'Project 5', 
    text: 'Coming Soon',
    github: 'https://github.com',
    live: 'https://github.com'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My recent work</h5>
      <h2>Projects</h2>
    <Swiper className='container project-container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    { 
      data.map(({id, image, title, text, github, live}) => {
        return (
          <SwiperSlide className='project__card'>
            <div className='project__item__img'>
              <img src={image} alt={title} className='project-image' />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className='project__item__cta btns'>
            <button className='cta btn'>
            <a href={github} classname='btn' target='_blank' rel='noreferrer'>Github</a></button>
            <button className='btn'>
            <a href={live} classname='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </button>
            </div>
          </SwiperSlide>
        )
      })
    }
    {/* close container div */}
    </Swiper>
    </section>
  )
}

export default Projects