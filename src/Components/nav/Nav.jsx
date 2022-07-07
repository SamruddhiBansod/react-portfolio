import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
{/*import {SiGooglescholar} from 'react-icons/si'*/}

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
   <nav>
     <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
     <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
     {/*<a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><SiGooglescholar/></a>*/}
     <a href='#experience' onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><BiBook/></a>
     <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><VscFolderLibrary/></a>
     <a href='#internships' onClick={() => setActiveNav('#sinternships')} className={activeNav === '#internships' ? 'active' : ''}><RiServiceLine/></a>
     <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav