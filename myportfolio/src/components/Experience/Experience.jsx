import React from 'react'
import './experience.css'
import HTML from '../../assets/html.svg'
import CSS from '../../assets/css.svg'
import JS from '../../assets/javascript.svg'
import ReactLogo from '../../assets/react.svg'
import Typescript from '../../assets/typescript.svg'
import SQL from '../../assets/mysql.svg'
import PostGreSQL from '../../assets/postgresql.svg'

import Next from '../../assets/next-js.svg'
import nodejs from '../../assets/node-js.svg'

import Git from '../../assets/git.svg'
import Github from '../../assets/github.svg'
import jest from '../../assets/jest.svg'
import playwright from '../../assets/playwright-logo.svg'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills do I have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      {/* Starting the front end */}
      <div className='experience__frontend'>
        <div className='experience__content'>
        <article className='experience__article'>
        <h3>Front-end Development</h3>
          <div className='logo-groups'>
            <img src={HTML} alt="html logo" id="html-logo" className='logos'/>
            <h4>HTML</h4>
          </div>
          <div className='logo-groups'>
            <img src={CSS} alt="css logo" className='logos' id="css-logo" />
            <h4>CSS</h4>
          </div>
          
          <div className='logo-groups'>
            <img src={JS} alt="javascript logo" className='logos' id="js-logo" />
            <h4>JavaScript</h4>
          </div>

          
          <div className='logo-groups'>
            <img src={ReactLogo} alt="react logo" className='logos' id="react-logo" />
            <h4>React</h4>
          </div>
          
          <div className='logo-groups'>
            <img src={Typescript} alt="typescript logo" className='logos' id="typescript-logo" />
            <h4>TypeScript</h4>
          </div>
        </article>
        </div> 
        {/* closes the experience__content */}
      </div>
      {/* closes the experience__frontend */}

      {/* Starting the back end */}
    <div className='experience__backend'>
      <div className='experience__content'>
          
        <article className='experience__article'>
        <h3 >Back-end Development</h3>
          {/* SQL */}
            <div className='logo-groups'>
            <img src={SQL} alt="sql logo" id="sql-logo" className='logos'/>
            <h4>SQL</h4>
            </div>
          {/* PostGreSQL */}
            <div className='logo-groups'>
            <img src={PostGreSQL} alt="postgresql logo" id="postgresql-logo" className='logos'/>
          <h4>PostGreSQL</h4>
          </div>
          
          <div className='logo-groups'>
          <h4>Express.js</h4>
          </div>
          
          <div className='logo-groups'>
          <img src={nodejs} alt="node.js logo" id="node-logo" className='logos'/>
          <h4>Node.js</h4>
          </div>
          
          <div className='logo-groups'>
          <img src={Next} alt="next.js logo" id="next-logo" className='logos'/>
          <h4>Next.js</h4>
          </div>
          
          
        </article>
      </div>
    </div>

      {/* Starting the other skills */}
      <div className='experience__other'>
        
        <div className='experience__content'>
        <article className='experience__article'>
        <h3>Other</h3>

        <div className='logo-groups'>
          <h4>User Experience/ User Interface</h4>
          </div>
          {/* Git */}
          <div className='logo-groups'>
          <img src={Git} alt="git logo" id="git-logo" className='logos'/>
          <h4>Git</h4>
          </div>
          {/* Github */}
          <div className='logo-groups'>
          <img src={Github} alt="github logo" id="github-logo" className='logos'/>
          <h4>Github</h4>
          </div>
          {/* jest */}
          <div className='logo-groups'>
          <img src={jest} alt="jest logo" id="jest-logo" className='logos'/>
          <h4>Jest</h4>
          </div>
          {/* playwright */}
          <div className='logo-groups'>
          <img src={playwright} alt="playwright logo" id="playwright-logo" className='logos'/>
          <h4>Playwright End-to-end Testing</h4>
          </div>
          
        </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience