import React from 'react'
import "./About.css"
import ME from "../../assets/img/perfil.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
     <div className="about__me-image">
      <img src={ME} alt="About Image" />
     </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>1+ Years of Experience</small>
          </article>
          <article className="about__card">
          <VscFolderLibrary className='about__icons'/>
           
            <h5>Mini Projects</h5>
            <small>150+ Individuals Projects</small>
          </article>
          <article className="about__card">
          <FiUsers className='about__icons'/>
            <h5>Major Projects</h5>
            <small>10+ Individuls and Collaboration Projects</small>
          </article>
        </div>
        <p>
        Experience in a product-based environment for 8 months as an automation engineer and with more than 2 years of hands-on experience developing MERN Stack. Knowledgeable of all aspects of the production process of a real-time video streaming application. Proactive in solving complex problems. Collaboration with team members is top-notch.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>





    </section>
  )
}

export default About