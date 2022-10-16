import React from "react";
import GitHubCalendar from "react-github-calendar";
 import "./Github.css";
export const GitHub = () => {
  const github = {
    margin: "auto",
    border: "5px solid var(--color-primary-variant)",
    padding: "20px",
    width:"80%",
    borderRadius: "10px",
   
  };
  return (
    <>
    <div className="github" style={{textAlign:"center",marginTop:"100px"}}>
      <h1 style={{color:"var(--color-primary)",fontWeight:"400",fontSize:"18px"}}>DAYS I CODE</h1>
      <div
        w={["100%", "100%", "65%"]}
        style={github}
        className="github_Calender"
       >
        <GitHubCalendar
          style={{ margin: "auto",backgroud:"black" }}
          username="prabhattopi"
         

        />
      </div>
    </div>
    <div className="github__cards">
      
    <article className="github__card">
    <img align="center" src="https://github-readme-stats.vercel.app/api?username=prabhattopi&show_icons=true&locale=en" alt="prabhattopi" />
    </article>
    <article className="github__card">
    <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=prabhattopi&" alt="prabhattopi"/>
    </article>
    </div>
    </>
  );
};

