import React, { useEffect, useState } from 'react'
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
import StickyNav from './compnents/nav/StickyNav'
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
 <>
 {isVisible&&<StickyNav/>}
  <Header/>
  {!isVisible&&<Nav/>}
  <About/>
  <Experience/>
  {/* <Services/> */}
  <Portfolio/>
  {/* <Testimonials/> */}
  {/* <GitHub/> */}
  <Contact/>
  <Footer/>

  


 </>
  )
}

export default App
