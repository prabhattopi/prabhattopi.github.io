import React from 'react'
import CV from "../../assets/img/FinalFinalFinalFianl.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a download  href={CV} className="btn">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA