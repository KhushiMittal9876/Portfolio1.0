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
          <motion.h1 variants={textVariants}>Khushi Mittal</motion.h1>
          <motion.h2 variants={textVariants}>Web and software developer</motion.h2>
          <motion.div className="buttons" variants={textVariants}>
            <a href="https://www.linkedin.com/in/khushi-mittall/" target="_blank" rel="noreferrer noopener"><motion.button variants={textVariants}>Hire Me</motion.button></a>
            <a href="https://drive.google.com/file/d/1SixAQYOBLWInTcOVDXM-T3pNJeKyZ-Dq/view?usp=sharing" target="_blank" rel="noreferrer noopener"><motion.button variants={textVariants}>Resume</motion.button></a>
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
