import React from 'react'
import "./topbar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import Links from "./links/Links"
import {motion} from "framer-motion"
import { useState } from 'react'

function Topbar() {
  const [open,setOpen] = useState(false)
  const variants = {
    open:{
      y: 0,
      transition:{
        type:"spring",stiffness:20,
      },
      
    },
    closed:{
      y: -1600,
      transition:{
        type:"spring",stiffness:10,
      }
    },
  };

  return (
    
    <motion.div className="topbar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
       <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
};

export default Topbar
