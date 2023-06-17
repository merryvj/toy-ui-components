import React, { useRef, useEffect, useState, Suspense} from "react";
import Slider from "./components/slider";
import Tabs from "./components/tabs";
import Card from "./components/card";
import Button from "./components/button";
import Drawer from "./components/drawer";
import Dial from "./components/dial";

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
    <div>
      <div className="demoWrapper">
        <Dial/>
      </div>

      {/* <div className="sceneWrapper">
        <Suspense>
        <Drawer />
          </Suspense>
      </div> */}
      
      <div className="demoWrapper">
        {data[0].items.map((item) => (
          <Card content={item.content} />
        ))}
      </div>
      <div className="demoWrapper">
        <Slider value={state} onChange={(value) => setState(value)}></Slider>
      </div>

      <div className="demoWrapper">
        <Tabs></Tabs>
      </div>
    </div>
  );
}
