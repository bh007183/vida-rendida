import React from 'react'
import Nav from "./Nav"
import "./style.css"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselComponent() {
    return (
        <Carousel  showArrows={false} autoPlay infiniteLoop={true} showThumbs={false} showStatus={false} interval={5000}>
          
        <div style={{height:"50vh", background: "purple"}}>
          
         
        </div>
        <div style={{height:"50vh", background: "pink"}}>
          
         
        </div>
        <div style={{height:"50vh", background: "blue"}}>
          
         
        </div>
        <div style={{height:"50vh", background: "yellow"}}>
          
         
        </div>
        <div style={{height:"50vh", background: "orange"}}>
          
         
        </div>
  

      </Carousel>
    )
}
