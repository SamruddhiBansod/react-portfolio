import React from 'react'
import './Internships.css'
import IMG1 from '../../assets/AWS.jpg'
const Internships = () => {
  return (
    <section id='internships'>
      <h2>Internships</h2>

      <div className="container internship__container">
        <article className="internship_item">
          <div className="internship__item-image">
            <img src={IMG1} alt="" />
          </div>
          <a href="https://cloudwatch.amazonaws.com/dashboard.html?dashboard=Internship_Project&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTI5NjIxNjQwOTg0MSIsIlUiOiJ1cy1lYXN0LTFfM1ZscXF5MnliIiwiQyI6Ijd2aTZiOG9xbW5tNjdvOWFudTR2aDB0aTdnIiwiSSI6InVzLWVhc3QtMTpkMDA3MzhiMC1kZDAyLTRmNmMtOGY1OC0xNzMwZTljNDg3ZTEiLCJPIjoiYXJuOmF3czppYW06OjI5NjIxNjQwOTg0MTpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy0zWVhLUjFERCIsIk0iOiJQdWJsaWMifQ==" className='btn'>Task Link</a>
            <a href="https://drive.google.com/drive/folders/14kfQSJCADsKXTuFMuuFB4-v7wlJ7sIal?usp=sharing" className='btn btn-primary'>Drive Link</a>
        </article>
      </div>
    </section>
  )
}

export default Internships