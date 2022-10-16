import React from 'react'
import About from './compnents/about/About'
import Contact from './compnents/contact/Contact'
import Experience from './compnents/experience/Experience'
import Footer from './compnents/footer/Footer'
import Header from "./compnents/header/Header"
import Nav from './compnents/nav/Nav'
import Portfolio from './compnents/portofolio/Portfolio'
import Services from './compnents/services/Services'
import Testimonials from './compnents/testimonials/Testimonials'
import {GitHub} from "./compnents/Calender/GitHub"
import "./index.css"
const App = () => {
  return (
 <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  {/* <Testimonials/> */}
  <GitHub/>
  <Contact/>
  <Footer/>

  


 </>
  )
}

export default App
