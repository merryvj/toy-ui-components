import React, {useEffect, useRef, useState} from "react";
import "./style.css";
import image from "./house.png"
import { motion } from "framer-motion";



export default function Window() {
    const frameRef = useRef();
    const imageRef= useRef();
    const [position, setPosition] = useState({x: 0, y:0});

    useEffect(() => {
        let x = imageRef.current.offsetWidth - frameRef.current.offsetWidth;
        //let y = imageRef.current.offsetHeight - frameRef.current.offsetHeight;
        setPosition({x: x, y: 0})
    }, []);

    function onHover(e) {
        console.log('dragging');
        let localX = e.clientX - imageRef.current.offsetWidth;
        //let localY = e.clientY - imageRef.current.offsetHeight;

        //constrain movement to frame dimensions
        localX = Math.min(localX, frameRef.current.offsetWidth - 20);
        localX = Math.max(localX, 0);
        // localY = Math.min(localY, frameRef.current.offsetHeight);
        // localY = Math.max(localY, 0);

        setPosition({x: localX, y: 0});
    }


    return(
        <div onMouseMove={(e) => onHover(e)} ref={frameRef} draggable="false" className="window-wrapper">
            <div className="window-panes">
                <div style={{transform: "translateX(-50%)"}} className="window-pane"/>
                <div style={{transform: "rotate(90deg) translateY(1.7%)"}}className="window-pane"/>
            </div>
            <div draggable="false" className="img-wrapper">
                <motion.img draggable="false"  ref={imageRef} animate={{left: position.x}} src={image}></motion.img>
            </div>
        </div>
    )
}