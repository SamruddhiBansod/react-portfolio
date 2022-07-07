import React from 'react'
import './About.css'
import ME from '../../assets/Sam.jpeg'
import {MdWavingHand} from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWavingHand className='about_icon'/>
              <h6>Let Me Introduce Myself</h6>
              
              
            </article>
          </div>
          <p>
              My name is Samruddhi Bansod.
              I am a Computer Science Engineering Student and a Frontend Enthusiast. 
              My Portfolio is a Summary of My Professional Background and My Acquainted SkillSet till now.
          </p>
              
              <a href='#contact' className='btn btn-primary'>Feel Free To Connect With Me</a>
        </div>
      </div>
    </section>
  )
}

export default About