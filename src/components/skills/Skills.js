import React, { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { FaGitSquare } from "react-icons/fa";

const variants = {
  initial: {
    x: -300,
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

function Skills() {
  const ref = useRef()
  const isInView = useInView(ref,{margin: '-100px'})
  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"} whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <p>
          focus on helping yourself than others <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b  whileHover={{ color: "#de9a06" }}>Skills</motion.b>
            <h3>Tech-Stacks I'm familier with</h3>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <SiCplusplus />
          <h3>C++</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <FaHtml5 />
          <h3>HTML5</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <IoLogoCss3 />
          <h3>CSS</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <SiJavascript />
          <h3>Javascript</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <FaReact />
          <h3>React.js</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <SiMysql />
          <h3>Sql</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <FaGitSquare />
          <h3>Git</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <FaGithub />
          <h3>Github</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <FaBootstrap />
          <h3>Bootstrap</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <TbBrandFramerMotion />
          <h3>Framer Motion</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <RiTailwindCssFill />
          <h3>TailwindCss</h3>
        </motion.div>
        <motion.div whileHover={{ color: "#de9a06" }} className="box">
          <GrWordpress />
          <h3>Wordpress</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
