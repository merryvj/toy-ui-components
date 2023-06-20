import React, {useState} from "react";
import "./style.css";
import { motion } from "framer-motion";

const numOptions = 3;

export default function Dial() {
    const [checked, setChecked] = useState(false);
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleClick = (e) => {
        let nextActive = active + direction;
        if(nextActive === numOptions - 1) setDirection(-1)
        else if (nextActive === 0) setDirection(1);
        setActive(active + direction);
    }

    return (
        // <div className={checked ? "check-wrapper active" : "check-wrapper inactive"} onClick={() => setChecked(!checked)}>
        //     <span className="check-inner"></span>
        // </div>
        <div className="dial-wrapper" onClick={handleClick}>
            <motion.div className="dial"
            animate={{rotate: -46 + (active * 46) - 1 + 'deg'}}
            >

            </motion.div>
            <Indicators numOptions={numOptions} active={active}/>
        </div>
    )
}

const Indicators = ({numOptions, active}) => {
    let indicators = [];
    for (let i = 0; i < numOptions; i++) {
        indicators.push(<Indicator index={i} active={active}/>)
    }

    return (
        <div className="indicators">
            {indicators}
        </div>
    );
}

const Indicator = ({active, index}) => {
    //let rotation = (360 - (index * 45)) + 1 + "deg";
    let isActive = index === active;

    return(
        <span className={`indicator deg-${index} ${isActive ? " on" :""}`}/>
    )
}