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
          {/* <article className="about__card">
            <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>3+ Years of Experience</small>
          </article> */}
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
        A Full-Stack Web Developer with 1000+ hours of hands-on coding experience, looking for new challenges to tackle and acquire new skills simultaneously. A quick learner who can adapt to new situations, with expertise in both front-end and back-end development. Handles any part of the process with ease, and also has remote collaboration and teamwork with 4+ projects.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>





    </section>
  )
}

export default About