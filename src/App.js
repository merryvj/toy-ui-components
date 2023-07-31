import React, { useRef, useEffect, useState, Suspense } from "react";
import Slider from "./components/slider";
import Tabs from "./components/tabs";
import Card from "./components/card";
import Button from "./components/button";
import Drawer from "./components/drawer";
import Dial from "./components/dial";
import Window from "./components/window";
import Radial from "./components/radial";
import Door from "./components/door";

export default function App() {
  const data = [
    {
      state: 0,
      items: [
        {
          type: "photo",
          content: "Hello!",
        },
      ],
    },
  ];

  const [state, setState] = useState(0);
  return (
    <>
      {/* <nav>
      <div className="nav__filters"><Tabs></Tabs></div>
    </nav> */}
      <div className="wrapper">
        <div className="demo">
          <div className="demo__window">
            <Radial />
          </div>
          <div className="demo__desc">
            <h3>WHEEL</h3>
          </div>
        </div>

        <div className="demo">
          <div className="demo__window">
            <Slider
              value={state}
              onChange={(value) => setState(value)}
            ></Slider>
          </div>
          <div className="demo__desc">
            <h3>SLIDER</h3>
          </div>
        </div>

        <div className="demo">
          <div className="demo__window">
            <Dial />
          </div>
          <div className="demo__desc">
            <h3>DIAL</h3>
          </div>
        </div>

        {data[0].items.map((item) => (
          <div className="demo">
            <div className="demo__window">
              <Card content={item.content} />
            </div>
            <div className="demo__desc">
              <h3>CARD</h3>
            </div>
          </div>
        ))}

        <div className="demo">
          <div className="demo__window">
            <Window />
          </div>
          <div className="demo__desc">
            <h3>WINDOW</h3>
          </div>
        </div>
        <div className="demo">
          <div className="demo__window" style={{ padding: "24px" }}>
            <Suspense>
              <Drawer />
            </Suspense>
          </div>
          <div className="demo__desc">
            <h3>DRAWERS</h3>
          </div>
        </div>

        <div className="demo">
          <div className="demo__window">
            <Door />
          </div>
          <div className="demo__desc">
            <h3>DOOR</h3>
          </div>
        </div>

        <div className="demo">
          <div className="demo__window">
            <Tabs />
          </div>
          <div className="demo__desc">
            <h3>TABS</h3>
          </div>
        </div>
      </div>
    </>
  );
}
