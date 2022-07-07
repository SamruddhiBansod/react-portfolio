import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Sam.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h6>Hello I'm</h6>
        <h1>Samruddhi Bansod</h1>
       
        <CTA />

        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header