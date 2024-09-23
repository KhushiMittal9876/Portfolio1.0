import React, { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: 50,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};



function About() {
    const ref = useRef();
    const isInView = useInView(ref,{margin: '-100px'})
  return (
    <motion.div ref={ref} className="About" variants={variants} initial="initial" animate={isInView && "animate"} whileInView="animate">
      <motion.div className="title" variants={variants}>About Me</motion.div>
      <motion.div className="textContainer">
        {/* <motion.div className="item" variants={variants}>
          Hello, I am <b>Khushi Mittal</b>, a highly skilled professional with a
          strong academic background and a passion for software development. My
          coursework in B.Tech Computer Science at <b>Chandigarh University</b>{" "}
          has exposed me to a wide range of subjects, including DSA, DAA, OOPS,
          DBMS, and Web Development.I have honed my skills in various
          programming languages and frameworks, including C, C++, Python,Html,
          Css,Javascript, React.js,Sql. 
        </motion.div> */}
        <br />
        <motion.div className="miss" variants={variants}>
          In addition to my academic pursuits, I have hands-on experience in
          developing frontend web applications and working with databases like
          MongoDB and MySQL. My commitment to continuous learning and strong
          problem-solving skills enables me to stay updated with the latest
          technologies and industry trends.
        </motion.div>
        <br />
        <motion.div className="miss" variants={variants}>
          Along with my technical expertise, I
          possess excellent <b>Communication Skills</b>, including public speaking,
          presentation delivery, and team collaboration. I am confident in
          articulating complex ideas clearly and effectively to both technical
          and non-technical audiences. Eager to contribute to innovative
          software development, I bring dedication, motivation, and exceptional
          results.
        </motion.div>
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
}

export default About;
