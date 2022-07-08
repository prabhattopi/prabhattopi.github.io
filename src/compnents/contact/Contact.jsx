import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"
const Contact = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tr4wl3l', 'template_df4vu8o', form.current, 'AHTpjZd1YWndWlVhK')

      e.target.reset()
  };
  return (
    <section id="contact">
      
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>
  <div className="container contact__container">
    <div className="contact__options">
      <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>topi9864@gmail.com</h5>
        <a href="mailto:topi9864@gmail.com" target="_blank">Send a message</a>

      </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Prabhat Singh</h5>
        <a href="https://m.me/profile.php?id=100080030157284" target="_blank">Send a message</a>

      </article>
      <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+91 9864924106</h5>
        <a href="https://api.whatsapp.com/send?phone=9864924106" target="_blank">Send a message</a>

      </article>
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Your Full Name' required />
      <input type="email" name="email" placeholder='Your Email' required/>
      <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
      <button type='submit' className='btn btn-primary'>Send Messagge</button>



    </form>
  </div>


    </section>
  )
}

export default Contact