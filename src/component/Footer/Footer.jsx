import React from 'react'
import Form from '../Form/Form'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Footerstyle from "./Footer.module.css"
export default function Footer() {
  const links_url={
    "github":"https://github.com/MG-9205",
    "linkedin":"https://www.linkedin.com/in/manishgupta31",
    "instagram":"https://www.instagram.com/manish_gupta31/"
  }
  return (
    <div>
      <Form/>
      <div className={Footerstyle.links}>
      <a href={links_url.github} target='self'><FaGithub className={Footerstyle.icon}/></a> 
       <a href={links_url.linkedin} target='self'><IoLogoLinkedin className={Footerstyle.icon}/></a> 
       <a href={links_url.instagram} target='self'><FaInstagram className={Footerstyle.icon}/></a>
      </div>
    </div>
  )
}
