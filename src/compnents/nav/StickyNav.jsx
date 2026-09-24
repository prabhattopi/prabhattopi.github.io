import React, { useState } from 'react';
import './Nav.css';
import ME from "../../assets/img/perfil.jpg"
const StickyNav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const handleNavLinkClick = (target) => {
    setActiveNav(target);
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="sticky-nav">
        <div className='img_source'>
            <img width="100%" height="100%" style={{objectFit:"cover",borderRadius:"50%"}} src={ME} alt="profile" />
        </div>
        <div className='link_source'>
        <a
        href="#home"
        onClick={() => handleNavLinkClick('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
       Home
      </a>
      <a
        href="#about"
        onClick={() => handleNavLinkClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
         About Me
      </a>
      <a
        href="#experience"
        onClick={() => handleNavLinkClick('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
       Skills
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNavLinkClick('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
       Projects
      </a>
      <a
        href="#contact"
        onClick={() => handleNavLinkClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
       Contact me
      </a>

        </div>
      
    </div>
  );
};

export default StickyNav;
