import React from "react";
import CarouselComponent from "../../components/Carousel";
import { Hidden } from "@material-ui/core";
import "./style.css";
import {useGlobalContext} from "../../context/store"

export default function Home() {
  const data = useGlobalContext().state.English
  console.log(data)
  return (
    <>
      <CarouselComponent />
      <main>
        <section id="topSection">
          <div className="topSectionBlock">
            <div className="centerContainer">
              <h1>What We Do</h1>
            </div>
            <div className="firstText">
              <p>
              {data.whatwedo}
              </p>
            </div>

            <div className="centerContainer">
              <button className="wwButton">What We DO</button>
            </div>
          </div>

          <div className="topSectionBlock">
            <div className="centerContainer">
              <h1>Who We Are</h1>
            </div>
            <div className="firstText">
              <p>
              {data.whoweare.substring(0, 300) + "..."}
              </p>
            </div>
            <div className="centerContainer">
              <button className="wwButton">Who We Are</button>
            </div>
          </div>
        </section>
        <section id="ministriesGridContainer">
          
         
          
          

          
           
        </section>
      </main>
    </>
  );
}
