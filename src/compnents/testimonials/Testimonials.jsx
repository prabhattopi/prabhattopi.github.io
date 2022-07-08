import React from 'react'
import "./testi.css"
import AVTR1 from "../../assets/img/ddd..jpg"
import AVTR2 from "../../assets/img/ddd..jpg"
import AVTR3 from "../../assets/img/ddd..jpg"
import AVTR4 from "../../assets/img/ddd..jpg"

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data=[
  {
    avatar:AVTR1,
    name:"Tina Snow",
    review:"Good Worse Bad Hindi English Math Science"
  },
  {
    avatar:AVTR2,
    name:"Tina Snow",
    review:"Good Worse Bad Hindi English Math Science"
  },
  {
    avatar:AVTR3,
    name:"Tina Snow",
    review:"Good Worse Bad Hindi English Math Science"
  },
  {
    avatar:AVTR4,
    name:"Tina Snow",
    review:"Good Worse Bad Hindi English Math Science"
  },
  
  
]








const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}

       pagination={{ clickable: true }}>
        {
          data.map((e,i)=>(
            <SwiperSlide key={i} className="testimonial">
            <div className="client__avatar">
              <img src={e.avatar} alt="avatar1" />
              </div>
              <h5 className='client__name'>{e.name}</h5>
              <small className='client__review'>
               {e.review}
              </small>
  
        
         
          </SwiperSlide>
      
          ))
        }
       
  
    
      </Swiper>
    </section>
  )
}

export default Testimonials