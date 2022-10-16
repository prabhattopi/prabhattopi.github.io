import React from 'react'
import CTA from './CTA'
import ME from "../../assets/img/header-img.svg"
import "./header.css"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>
        Hello I'm
      </h5>
      <h1>Prabhat Singh</h1>
      <h5 className="text-light" style={{fontSize:"18px"}}>
        Full Stack Web Developer
      </h5>
       <CTA/>
       <HeaderSocial/>
       <div className="me">
        <img src={ME} alt="m" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>

    </div>
   </header>
  )
}

export default Header