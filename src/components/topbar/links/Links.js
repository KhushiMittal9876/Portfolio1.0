import React from "react";
import {motion} from 'framer-motion';

function Links({setOpen}) {
  const items = ["Homepage", "Skills", "Projects", "Contact", "About"];
 
  return (
    <div className = "links">
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item}  whileHover={{scale:1.2, color: '#de9a06'}} onClick={()=>{setOpen((prev) => !prev)}} >
          {item}
        </motion.a>
      ))}
    </div>
  );
}

export default Links;
