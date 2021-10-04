import React from "react";
import Nav from "./Nav";
import "./style.css";
import {Link} from "react-router-dom"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useGlobalContext } from "../context/store";
export default function CarouselComponent() {
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
    <Carousel
      showArrows={false}
      autoPlay
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={10000}
    >
      <div className="carousel-screens" id="firstSlide">
        <div id="costaRicaHeader">
  <h1>{data.costaRicaHeader}</h1>
        </div>
        <div id="firstSlideContentContain">
          <div id="firstSlideButtonContain">
          <Link  className="link"to="/costa-rica-missions">
            <button style={{cursor: "pointer"}} id="firstSlideButton">{data.learnMoreButton}</button>
            </Link>
          </div>

          <div id="firstSlideText">
            <h1>{data.firstSlideHeader}</h1>
            <p
              style={{ fontSize: "18px" }}
            >{data.vision}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Link  className="link"to="/costa-rica-missions">
            <button style={{cursor: "pointer"}} id="firstSlideSMButton">{data.learnMoreButton}</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-screens" id="secondSlide">
      <div id="firstSlideContentContain">
          <div id="firstSlideButtonContain">
          <Link  className="link"to="/costa-rica-mission-trips">
            <button style={{cursor: "pointer"}} id="firstSlideButton">{data.learnMoreButton}</button>
            </Link>
          </div>

          <div id="firstSlideText">
            <h1>What We Do</h1>
            <p
              style={{ fontSize: "18px" }}
            >{data.whatwedo}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Link  className="link"to="/costa-rica-mission-trips">
              <button style={{cursor: "pointer"}} id="firstSlideSMButton">{data.learnMoreButton}</button>
              </Link>
            </div>
          </div>
        </div>
        <div id="firstBack">

        </div>
        <div id="secondBack">

        </div>
        <div id="thirdBack">

        </div>
      </div>
    </Carousel>
  );
}
