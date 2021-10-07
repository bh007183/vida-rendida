import React from "react";
import "./style.css";
import centralAmerica from "../../images/Central.jpeg"
import costaRica from "../../images/NICARAGUA.jpeg"
import {Helmet} from "react-helmet"
import { GlobalProvider, useGlobalContext } from "../../context/store";

export default function WhoWeAre() {
  let data;
  const english = useGlobalContext().state.English
  const spanish = useGlobalContext().state.Spanish
  const bool = useGlobalContext().state.Bool
  if(bool){
    data = spanish
  }else{
    data = english
  }

  return (
    <div id="whoWeAreContain">
      <Helmet>
          <meta charSet="utf-8" />
          <meta
      name="description"
      content="Who We Are"
    />
                <title>About Us</title>
                <link rel="canonical" href="https://surrenderedlife.org/who-we-are" />
          </Helmet>
      <div id="whoWeAreHeader">
       
        <img id="famPic" style={{display: "block"}}></img>
        
        <div id="introText">
          <h2>{data.ourVision}</h2>
          <p>{data.vision}</p>
        </div>
      </div>
      <div className="blockContain">
          <div className="block">
              <h2>{data.whoWeAre}</h2>
              <p>
                  {data.whoweare}
              </p>
          </div>
      </div>
      <div className="blockContain">
          <div className="block">
              <h2>Where We Serve</h2>
              <div id="mapContain">
                
                <img src={centralAmerica} alt="map of central america"></img>
                
                
                <img src={costaRica} alt="map of costa rica"></img>
                
              </div>
          </div>
      </div>
    </div>
  );
}
