import React, { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { IoPlay } from "react-icons/io5";
const items = [
  {
    id: 1,
    title: "TaskSphere",
    img: "/images/TaskSphere.png",
    desc: "Developed an interactive To-Do List application with smooth animations to enhance user experience, providing a seamless task management solution. Leveraged local storage to ensure persistent data saving and retrieval, even after browser refreshes or closures.",
    link: "https://to-do-list-eta-sooty.vercel.app/",
  },
  {
    id: 2,
    title: "FocusHive",
    img: "/images/timer.png",
    desc: "Developed a productivity website featuring a countdown timer to facilitate focused work sessions, complemented by a To-Do List for comprehensive task tracking. Incorporated local storage to ensure persistent data retention, enhancing overall user efficiency.",
    link: "https://timer-pi-blue.vercel.app/",
  },
  {
    id: 3,
    title: "ParaGenerator",
    img: "/images/ParaGenerator.png",
    desc: "Developed a web application that generates random paragraphs based on user-defined input for the desired count. The intuitive interface ensures easy customization, providing dynamic content generation with each request.",
    link: "https://paragraph-generator-gold-one.vercel.app/",
  },
  {
    id: 4,
    title: "WishList",
    img: "/images/WishList.png",
    desc: "Created a Wishlist web application focused on managing user aspirations with a seamless user experience and smooth interface. Leveraged local storage to securely preserve user wishes, ensuring persistent tracking and easy access to goals.",
    link: "https://wish-list-lemon.vercel.app/",
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
            <a href={item.link} target="_blank" rel="noreferrer noopener">
              <motion.button whileHover={{scale:1.2, backgroundColor:"#de9a06"}}><IoPlay />&nbsp; See  Live Demo</motion.button>
            </a>
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
