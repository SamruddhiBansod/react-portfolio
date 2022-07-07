import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        {/*End of frontend*/}

        <div className="experience__backend">
        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
             <div>
              <h4>Firebase</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
            <h4>Java</h4>
              <small className='text-light'>Basic</small>
           </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience