import React from "react";
import Nav from "./Nav";
import "./style.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useGlobalContext } from "../context/store";
export default function CarouselComponent() {
  const data = useGlobalContext().state.English;
  console.log(data);
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
          <h1>Costa Rica Missions</h1>
        </div>
        <div id="firstSlideContentContain">
          <div id="firstSlideButtonContain">
            <button id="firstSlideButton">Learn More</button>
          </div>

          <div id="firstSlideText">
            <h1>Surrendered Life Ministries</h1>
            <p
              style={{ fontSize: "18px" }}
            >{`Spreading the gospel of our Lord Jesus through out Costa Rica, our goal is ${data.vision}`}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button id="firstSlideSMButton">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-screens" id="secondSlide">
      <div id="firstSlideContentContain">
          <div id="firstSlideButtonContain">
            <button id="firstSlideButton">Learn More</button>
          </div>

          <div id="firstSlideText">
            <h1>What We Do</h1>
            <p
              style={{ fontSize: "18px" }}
            >{`Evangelism, Preach in churches, Encourage the church to boldly live for Christ, children’s ministry, youth ministry, pastoral/ leadership training, humanitarian, building projects, restoration of those in addictions, men’s & women’s ministry, worship music project, slums, homeless outreach, take bibles to those without the word and travel to share with indigenous groups. `}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button id="firstSlideSMButton">Learn More</button>
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
