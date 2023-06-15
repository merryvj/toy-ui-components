import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import image from "./mimi.gif";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import GLTransition from "react-gl-transition";

const shaders = Shaders.create({
  card: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform vec2 mouse;


    void main() {
      vec2 st = uv;
      vec3 color = vec3(st.x + mouse.x,st.y + mouse.y, 1.0);
  
      gl_FragColor = vec4(color,1.0);
    }`,
  },
});

const CardShader = ({mouse}) => (
  <Node shader={shaders.card} uniforms={{mouse}} />
);

export default function Card(props) {
  const cardRef = useRef(null);
  const [width, setWidth] = useState(100);
  const [mouse, setMouse] = useState([0.5, 0.5]);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    //console.log('width', cardRef.current ? cardRef.current.offsetWidth : 0);
  }, [cardRef.current]);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    setMouse([
      (e.clientX - rect.left) / rect.width,
      (rect.bottom - e.clientY) / rect.height,
    ]);
  };

  const cardRandomStyle = {
    //transform: `rotate(${Math.random() * 5 + "deg"})`,
    rotateX: rotateX,
    rotateY: rotateY,
  };


  return (
    <motion.div
      onMouseMove={handleMouse}
      style={{
        width: 400,
        height: 400,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 400,
      }}
    >
      <motion.div className="cardWrapper" ref={cardRef} style={cardRandomStyle}>
        <Surface className="cardBg" width={width} height={width * 1.3}>
          <CardShader mouse={mouse}/>
        </Surface>
        <div className="cardBody">
          <img src={image} className="cardImage"></img>
          <div className="cardContent"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
