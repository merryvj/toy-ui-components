import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import JSConfetti from "js-confetti";

const menuItems = [
  {
    icon: "🎓",
    text: "cap",
  },
  {
    icon: "🌸",
    text: "bloom",
  },
  {
    icon: "🍬",
    text: "treats",
  },
  {
    icon: "🐄",
    text: "yeehaw",
  },
  {
    icon: "🏐",
    text: "ballin",
  },
  {
    icon: "💫",
    text: "wish",
  },
  {
    icon: "🧋",
    text: "tea",
  },

  {
    icon: "🧧",
    text: "thank",
  },
];

export default function Radial() {
  const [selected, setSelected] = useState(menuItems[0]);
  const angle = 360 / menuItems.length;
  const jsConfetti = new JSConfetti();

  const updateSelected = (e, item) => {
    setSelected(item);
  };

  const selectItem = (item) => {
    jsConfetti.addConfetti({
      emojis: [item.icon],
      emojiSize: 100,
      confettiNumber: 6,
    });
  };

  const clearSelection = () => {
    setSelected(null);
    jsConfetti.clearCanvas();
  };

  const itemRotation = (index) => {
    return {
      transform: `rotate(${angle * index}deg) skew(${angle}deg)`,
    };
  };

  const iconRotation = (index) => {
    return {
      transform: `translate(75%, 100%) skew(-${angle}deg) rotate(-${
        angle * index
      }deg)`,
    };
  };

  return (
    <div className="radial-wrapper" onMouseLeave={() => clearSelection()}>
      <div className="menu-center">
        <div className="menu-center--indicator"></div>
        {selected && selected.text}
      </div>
      <ul className="menu-items">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="menu-item"
            style={itemRotation(i)}
            onMouseEnter={(e) => updateSelected(e, item)}
            onClick={() => selectItem(item)}
          >
            <span className="menu-item--icon" style={iconRotation(i)}>
              {item.icon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
