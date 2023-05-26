import React, { useRef, useEffect, useState } from "react";
import Slider from "./components/slider";
import Tabs from "./components/tabs";
import Card from "./components/card"

export default function App() {
  
  const data = [
    {
      "state": 0,
      "items": [
        {
          "type":"photo",
          "content": "Hello!"
        },
      ]
    }
  ]

  const [state, setState] = useState(0);
  return (
    <div>

     <div className="demoWrapper">
     {data[0].items.map((item) => (
      <Card content={item.content}/>
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
