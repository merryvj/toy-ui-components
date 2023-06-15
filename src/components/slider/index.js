import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { motion } from "framer-motion";
import clamp from "lodash";

const values = [":|", ":]", ":)", ":D"];
export default function Slider({ value, onChange }) {

  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    setWidth(container.current.getBoundingClientRect().width);
    const segmentWidth = width / values.length;
    if (value == 0)
    setPosition(value * segmentWidth + 35);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);

    function listener() {
      if (!container.current) return;

      let newWidth = container.current.getBoundingClientRect().width;
      const segmentWidth = newWidth / (values.length - 1);
      setPosition(value * segmentWidth);
    }
  }, [value]);

  const toNewPos = (e) => {
    if (!container.current) return;

    let containerWidth = container.current.getBoundingClientRect().width;
    const segmentWidth = containerWidth / (values.length - 1);
    let index = Math.round(
      (e.clientX - container.current.getBoundingClientRect().left) /
        segmentWidth
    );

    if (index >= values.length) index = values.length - 1;
    if (index <= 0) index = 0;

    console.log(index);

    let newPos = index * segmentWidth;
    if (index === 0) newPos += 35;
    else if (index === values.length - 1) newPos -= 35;
    setPosition(newPos);
    onChange(index);
  };

  return (
    <div ref={container} className="sliderContainer">
      {position != null && (
        <motion.div
        className="sliderThumb"
        style={{
          cursor: isDragging ? "grabbing" : "grab" 
        }}
        initial={false}
        animate={{
          x: position,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 22,
          velocity: 1.2,
        }}
        onPointerDown={(e) => {
          const { ownerDocument } = e.currentTarget;
          setIsDragging(true);
          function onPointerMove(e) {
            toNewPos(e);
          }

          function onPointerUp(e) {
            setIsDragging(false);
            ownerDocument.removeEventListener("pointermove", onPointerMove);
          }

          ownerDocument.addEventListener("pointermove", onPointerMove);
          ownerDocument.addEventListener("pointerup", onPointerUp);
        }}
      >
        <div className="sliderLabel">{values[value]}</div>
      </motion.div>
      )}
      <div className="increments">
        {values.slice(0, -1).map((stop) => (
          <div
            className="increment"
            // onClick={(e) => {
            //   toNewPos(e);
            // }}
          ></div>
        ))}
      </div>
    </div>
  );
}
