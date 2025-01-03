import React from "react";
import "./home.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Home() {
  return (
    <div className="home">
      <div className="wrappers">
        <motion.div className="textContainers" variants={textVariants} initial="initial" animate="animate">
          <motion.h1 variants={textVariants} className="beau-rivage-regular">Khushi Mittal</motion.h1>
          <motion.h2 variants={textVariants}>Web and software developer</motion.h2>
          <motion.div className="buttons" variants={textVariants}>
          <motion.button variants={textVariants}><a href="https://www.linkedin.com/in/khushi-mittall/" target="_blank" rel="noreferrer noopener">Hire Me</a></motion.button>
          <motion.button variants={textVariants}><a href="https://drive.google.com/file/d/12grZwkK1B2iRoMSOMuz75-dLj0fpFlDx/view?usp=sharing" target="_blank" rel="noreferrer noopener">Resume</a></motion.button>
          </motion.div>
        </motion.div>
      
      </div>
      <div className="imageContainers">
        <img src="/images/pic.png" alt="can't display" />
      </div>
    </div>
  );
}

export default Home;
