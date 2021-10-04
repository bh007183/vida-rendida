import React from "react";
import CarouselComponent from "../../components/Carousel";
import { Hidden } from "@material-ui/core";
import "./style.css";
import {useGlobalContext} from "../../context/store"
import {Link} from "react-router-dom"

export default function Home() {
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
    <div id="mainContain">
      <CarouselComponent />
      <main>
        <section id="topSection">
          <div className="topSectionBlock">
            <div className="centerContainer">
              <h1>{data.whatWeDo}</h1>
            </div>
            <div className="firstText">
              <p>
              {data.whatwedo}
              </p>
            </div>

            <div className="centerContainer">
            <Link to="/costa-rica-mission-trips">
              <button style={{cursor: "pointer"}} className="wwButton">{data.whatWeDo}</button>
              </Link>
            </div>
          </div>

          <div className="topSectionBlock">
            <div className="centerContainer">
              <h1>{data.whoWeAre}</h1>
            </div>
            <div className="firstText">
              <p>
              {data.whoweare.substring(0, 300) + "..."}
              </p>
            </div>
            <div className="centerContainer">
              <Link to="/costa-rica-missions">
              <button style={{cursor: "pointer"}}className="wwButton">{data.whoWeAre}</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
