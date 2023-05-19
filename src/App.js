import React, { useRef, useEffect, useState } from "react";
import Slider from "./components/slider";
import Tabs from "./components/tabs";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibXZpYW5nIiwiYSI6ImNqd205NDh6ZzAwMTIzeG1nZXR0ZTNqMHkifQ.vsrJM2hzndVmFHA2gzS2Rw";

export default function App() {

  const [state, setState] = useState(0);
  return (
    <div>

     <div className="demoWrapper">
      <Slider value={state} onChange={(value) => setState(value)}></Slider>
     </div>

     <div className="demoWrapper">
        <Tabs></Tabs>
     </div>

    </div>
  );
}
