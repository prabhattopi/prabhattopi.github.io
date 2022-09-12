import React from 'react'
import CV from "../../assets/img/Prabhat_Singh_Resume_12-09-2022-20-13-30.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a download  href={CV} className="btn">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA