import React, {useRef, useState} from "react"
import "./style.css";

const data = ["monday", "tuesday", "wednesday", "thursday", "friday"];

export default function Tabs() {
    const [tabBounding, setTabBounding] = useState(null);
    const [wrapperBounding, setWrapperBounding] = useState(null);
    const [highlighted, setHighlighted] = useState(null);
    const [isFromNull, setIsFromNull] = useState(true);

    const wrapperRef = useRef(null);
    const highlightRef = useRef(null);

    const highlightStyles = {}
    
    const updateHighlight = (e, tab) => {
        setTabBounding(e.target.getBoundingClientRect());
        setWrapperBounding(wrapperRef.current.getBoundingClientRect());
        setIsFromNull(!highlighted);
        setHighlighted(tab);
    }

    const resetHighlight = () => {
        setHighlighted(null);
    }

    if (tabBounding && wrapperBounding) {
        highlightStyles.transitionDuration = isFromNull ? "0ms" : "150ms";
        highlightStyles.opacity = highlighted ? 1 : 0;
        highlightStyles.width = `${tabBounding.width}px`;
        highlightStyles.transform = `translate(${
            tabBounding.left - wrapperBounding.left
          }px)`;
    }

    return(
        <div className="tabs-wrapper" ref={wrapperRef} onMouseLeave={resetHighlight}>
            <div className="highlight" useRef={highlightRef} style={highlightStyles}></div>
            {data.map((tab) => (
                <div key={tab} className="tab" onMouseEnter={(e) => updateHighlight(e, tab)}>{tab}</div>
            ))}

        </div>
    )
}