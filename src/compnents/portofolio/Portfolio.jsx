import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/img/work1.png";
import IMG2 from "../../assets/img/work2.png";
import IMG3 from "../../assets/img/work4.png";
import IMG4 from "../../assets/img/work5.png";
import IMG5 from "../../assets/img/work8.png";
import IMG6 from "../../assets/img/work12.png";

const data=[
  {
    id:1,
    image:IMG1,
    title:"Rodan-Field Clone",
    github:"https://github.com/pallu2108/Rodan-Field-Clone-2",
    demo:"https://cool-khapse-fa2715.netlify.app/"
  },
  {
    id:2,
    image:IMG2,
    title:"BATH & BODY Clone",
    github:"https://github.com/prabhattopi/ProjectUnit3-Bath-Body",
    demo:"https://beamish-palmier-e5b41f.netlify.app/"
  },
  {
    id:3,
    image:IMG3,
    title:"Shipping page with Validation",
    github:"https://github.com/prabhattopi/ProjectUnit3-Bath-Body/tree/master/Pcheckout",
    demo:"https://beamish-palmier-e5b41f.netlify.app/pcheckout/1"
  },
  {
    id:4,
    image:IMG4,
    title:"YouTube Clone",
    github:"https://github.com/prabhattopi/Unit-3_Swanand/tree/master/Day9/Youtube",
    demo:"https://youtubeprabhatwalla.netlify.app/"
  },
  {
    id:5,
    image:IMG5,
    title:"Weather App Real Data",
    github:"https://github.com/prabhattopi/Unit-3_Swanand/tree/master/Day9/weather",
    demo:"https://prabhatwallaweatherapp.netlify.app/"
  },
  {
    id:6,
    image:IMG6,
    title:"Movie App",
    github:"https://github.com/prabhattopi/Unit-3_Swanand/tree/master/Day8/movie",
    demo:"https://munnamovie.netlify.app/"
  },
]







const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(e=>(
          <article key={e.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={e.image} alt="Rodan-Field Clone" />
          </div>
          <h3>{e.title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={e.github}
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href={e.demo}
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        ))
       }
      </div>
    </section>
  );
};

export default Portfolio;
