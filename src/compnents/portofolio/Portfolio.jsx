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
    image:IMG5,
    title:"Fraazo Clone",
    description:"It is a collaborative project that aims to develop an online fruit and vegetable store. ",
    tech_stack:["Nodejs","Expressjs","React","MongoDB","CSS","Material-UI","JWT","GIT","render"],

github:"https://github.com/prabhattopi/frazzoUI",
    demo:"https://frazzo-ui-prabhattopi.vercel.app"
  },
  {
    id:2,
    image:IMG3,
    title:"Full Stack IT Walle",
    description:"As part of this project, I am designing a record storage system for IT professionals",
    tech_stack:["Nodejs","Expressjs","MongoDB","React","Context-API","Tailwind CSS","CSS","GIT","render"],
    github:"https://github.com/prabhattopi/crudApp",
    demo:"https://crud-app-lemon.vercel.app"
  },
  {
    id:3,
    image:IMG1,
    title:"Full Stack Image Gallery",
    description:"I am working on this project for personal purposes in order to collect beautiful pictures",
    tech_stack:["React","DaisyUI","Context-API","Tailwind CSS","Firebase","Fire-store","Git","vercel"],
    github:"https://github.com/prabhattopi/ImageGallery",
    demo:"https://image-gallery-one-silk.vercel.app"
  },
  {
    id:4,
    image:IMG2,
    title:"BATH & BODY Clone",
    description:"This is a collaborative project of beauty products, where you can buy, pay, and get delivered to your home.",
    tech_stack:["HTML","CSS","Javascript","Git"],
    github:"https://github.com/prabhattopi/ProjectUnit3-Bath-Body",
    demo:"https://beamish-palmier-e5b41f.netlify.app/"
  },
  
  {
    id:5,
    image:IMG4,
    title:"YouTube Clone",
    description:"This is an individual project of a partial clone of You-Tube.",
    tech_stack:["HTML","CSS","Javascript","Git"],
    github:"https://github.com/prabhattopi/Unit-3_Swanand/tree/master/Day9/Youtube",
    demo:"https://youtubeprabhatwalla.netlify.app/"
  },
{
    id:6,
    image:IMG6,
    title:"Movie App",
    description:"This is an individual project where you can search for your favourite movie and have debouncing features.",
    tech_stack:["HTML","CSS","Javascript","Git"],
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
          <h4 className="portfolio-description">{e.description}</h4>
          <h4>Tech-Stacks</h4>
          <div className="tech-stack">{e.tech_stack.map(e2=>(
            <p className="btn2">{e2}</p>
          ))}</div>
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
