import React, { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TaskSphere",
    img: "/images/TaskSphere.png",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque labore illum aperiam ullam recusandae necessitatibus facil eum quaerat eligendi",
  },
  {
    id: 2,
    title: "Timer",
    img: "/images/timer.png",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque labore illum aperiam ullam recusandae necessitatibus facilis  eum quaerat eligendi?",
  },
  {
    id: 3,
    title: "ParaGenerator",
    img: "/images/ParaGenerator.png",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque labore illum aperiam ullam recusandae necessitatibus facilis adipisci eum quaerat eligendi?",
  },
  {
    id: 4,
    title: "TaskSphere",
    img: "/images/TaskSphere.png",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque labore illum aperiam ullam recusandae necessitatibus facilis adipisci eum quaerat eligendi?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
