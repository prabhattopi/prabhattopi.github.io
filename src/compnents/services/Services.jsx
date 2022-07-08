import React from 'react'
import "./service.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts, diagrams.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture.</p>
             
            </li>

          </ul>

        </article>




        <article className='service'>
          <div className="service__head">
          <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Competition Monitoring</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML E-mail Template Design.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing software workflow.</p>
             
            </li>

          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services