import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/AcademiaMeet.png'
import IMG2 from '../../assets/AWS.jpg'
import IMG3 from '../../assets/WanderLust.jpeg'

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'An online e-learning platform similar to Google Meet',
  github: 'http://github.com',
  demo: 'http://github.com'
  },
  {
  id: 2,
  image: IMG2,
  title: 'Deployment of an EC2 instance and monitored on CloudWatch',
  github: 'https://cloudwatch.amazonaws.com/dashboard.html?dashboard=Internship_Project&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTI5NjIxNjQwOTg0MSIsIlUiOiJ1cy1lYXN0LTFfM1ZscXF5MnliIiwiQyI6Ijd2aTZiOG9xbW5tNjdvOWFudTR2aDB0aTdnIiwiSSI6InVzLWVhc3QtMTpkMDA3MzhiMC1kZDAyLTRmNmMtOGY1OC0xNzMwZTljNDg3ZTEiLCJPIjoiYXJuOmF3czppYW06OjI5NjIxNjQwOTg0MTpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy0zWVhLUjFERCIsIk0iOiJQdWJsaWMifQ==',
  demo: 'https://drive.google.com/drive/folders/14kfQSJCADsKXTuFMuuFB4-v7wlJ7sIal?usp=sharing'
  },
  {
  id: 3,
  image: IMG3,
  title: 'A static Travel Website similar to MakemyTrip.com',
  github: 'https://github.com/SamruddhiBansod/Travel-Website',
  demo: 'https://samruddhibansod.github.io/Travel-Website/'
  }
  
]
const Portfolio = () => {
  return (
    <section id='port'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Task Link</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Portfolio