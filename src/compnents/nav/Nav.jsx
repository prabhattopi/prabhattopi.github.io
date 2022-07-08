import React, { useState } from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
const Nav = () => {
  const [activenav,setActive]=useState("#")
  return (
    <nav> 
      <a href="#" onClick={()=>setActive("#")} className={activenav==="#"?"active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive("#about")} className={activenav==="#about"?"active":""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActive("#experience")} className={activenav==="#experience"?"active":""}><BiBook/></a>
      <a href="#portfolio" onClick={()=>setActive("#services")} className={activenav==="#services"?"active":""}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActive("#contact")} className={activenav==="#contact"?"active":""}><BiMessageSquareDetail/></a>
      
      </nav>
  )
}

export default Nav