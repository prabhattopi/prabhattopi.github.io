import React from 'react'
import "./foot.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>
        PRABHAT

      </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>

         
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/prabhat-singh-71296721b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/prabhattopi" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100080030157284"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com/NumericalWallah"><IoLogoTwitter/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
        {/* <a href="https://facebook.com"></a> */}


      </div>


      <div className="footer__copyright">
        <small>&copy; PRABHAT Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer