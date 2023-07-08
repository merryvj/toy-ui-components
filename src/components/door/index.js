import React from "react";
import "./style.css"

export default function Door() {
    return (
        <div className="door">
            <div className="door-front">
            <svg
                className="heart-handle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 -50 400 400"
            >
                <path
                    d="M0 200 v-200 h200 
                    a100,100 90 0,1 0,200
                    a100,100 90 0,1 -200,0
                    z"
                    strokeWidth={64}
                    strokeLinejoin="round"
                />
            </svg>
            </div>
        </div>
    )
}