import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./navbar.scss"
import { motion } from "framer-motion"


function Navbar() {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      
      <div className="wrapper">
        <motion.span>Khushi Mittal</motion.span>
        <div className="social">
            <a href="#">
            <FaInstagram />
            </a>
            <a href="#">
            <FaGithub />   
            </a>
            <a href="#">
            <FaLinkedin />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
