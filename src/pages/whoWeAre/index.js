import React from "react";
import "./style.css";

import { GlobalProvider, useGlobalContext } from "../../context/store";

export default function WhoWeAre() {
  const data = useGlobalContext().state.English;
  console.log(data);

  return (
    <div>
      <div id="whoWeAreHeader">
       
        <img id="famPic" style={{display: "block"}}></img>
        
        <div id="introText">
          <h2>Our Vision</h2>
          <p>{data.vision}</p>
        </div>
      </div>
      <div id="blockContain">
          <div className="block">
              <h2>Who We Are</h2>
              <p>
                  {data.whoweare}
              </p>

          </div>
          


      </div>
    </div>
  );
}
