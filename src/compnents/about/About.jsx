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
        Welcome to my profile. I am a Full Stack Web Developer. I've been very glad to study at Masai School for my Full Stack Web Development course because it's a place where a person get skilled within 6 months. Apart from my studies, I love to watch and play cricket. Moreover, I like playing video games. I enjoy solving challenging problems of DSA and coding, as well as teaching problems of DSA and coding. In my family, My father is a businessman and my mother is a homemaker. I love to spend my time with family whenever I have free time from my work. I am also a true fan of Lord Krishna.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>





    </section>
  )
}

export default About