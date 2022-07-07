import React from 'react'
import Header from './Components/header/Header.jsx'
import Nav from './Components/nav/Nav.jsx'
import About from './Components/about/About.jsx'
import Experience from './Components/experience/Experience.jsx'
import Portfolio from './Components/portfolio/Portfolio.jsx'
import Internships from './Components/internships/Internships.jsx'
import Contact from './Components/contact/Contact.jsx'
import Footer from './Components/footer/Footer.jsx'
{/*import Certificates from './certificates/Certificates.jsx'*/}


//import App from './App'
const App = () => {
  return (
    <>
       <Header></Header>
        <Nav></Nav>
        <About></About>
        <Experience></Experience>
        <Portfolio></Portfolio>
        <Internships></Internships>
        <Contact></Contact>
        <Footer></Footer>
        {/*<Certificates></Certificates>*/}
        
    </>
  )
}

export default App