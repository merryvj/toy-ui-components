import React, { useState, useEffect } from "react";
import { motion, useAnimate} from "framer-motion";
import "./style.css";


export default function Button() {
  const [isPressed, setIsPressed] = useState(false);
  const [hover, setHover] = useState(false);

  const [progress, setProgress] = useState(0);
  const hoverAnimation = useAnimate();
  
  const handleClick = () => {
    setProgress(100);
  };


  return (
    <motion.div
        onClick={() => handleClick()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={styles.wrapper}>
      <motion.div style={styles.front}>
      <motion.div style={styles.progress} animate={{width: progress + "%", duration: 6}} ></motion.div>
        {hover ? "Hello!" : "See ya!"}
      </motion.div>
      
    </motion.div>
  );
}

const wrapperVariants = {
    circle: {
        width: "10px"
    },
    large: {
        width: "100px"
    }
}
const styles = {
  wrapper: {
    position: "relative",
    textAlign: "center",
    minWidth: "100px",
    backgroundColor: "#4D433D",
    borderRadius: "999px",
    userSelect: "none",
    outlineOffset: "4px"
  },
  progress: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "0",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  front: {
    display: "block",
    padding: "12px 40px",
    backgroundColor: "#52be7d",
    color: "white",
    borderRadius: "999px",
    transform: "translateY(-6px)",
    overflow: "hidden"
  }
};
