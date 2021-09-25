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
                Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?
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
          
          <div className="ministriesRow">
            <div className="centerContainer">
              <h3>Humanitarian Work</h3>

            </div>
            <div className="left">
              <img style={{float: "left"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>

            </div>
          </div>
          <div className="ministriesRow">
          <div className="centerContainer">
              <h3>Slum Work</h3>

            </div>
            <div className="right">
            <img style={{float: "right"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>
            </div>
          </div>
          <div className="ministriesRow">
            <div className="centerContainer">
              <h3>Indigenous Work</h3>

            </div>
            <div className="left">
              <img style={{float: "left"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>

            </div>
          </div>
          <div className="ministriesRow">
          <div className="centerContainer">
              <h3>Music</h3>

            </div>
            <div className="right">
            <img style={{float: "right"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>
            </div>
          </div>
          <div className="ministriesRow">
            <div className="centerContainer">
              <h3>Pastoral Training</h3>

            </div>
            <div className="left">
              <img style={{float: "left"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>

            </div>
          </div>
          <div className="ministriesRow">
          <div className="centerContainer">
              <h3>Building Churches and Homes</h3>

            </div>
            <div className="right">
            <img style={{float: "right"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>
            </div>
          </div>
          <div className="ministriesRow">
            <div className="centerContainer">
              <h3>Childrens Ministry</h3>

            </div>
            <div className="left">
              <img style={{float: "left"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>

            </div>
          </div>
          <div className="ministriesRow">
          <div className="centerContainer">
              <h3>Home Visits</h3>

            </div>
            <div className="right">
            <img style={{float: "right"}} src="https://via.placeholder.com/300"></img>
              <p className="ministryPar"> Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing? We
                don't need no education. Yes you do. You've just used a double
                negative. I'll put this over here, with the rest of the fire.I
                am a man, he's a man, we're men! Ok, tell me how your feeling. I
                feel delicate... and annoyed, and... I think I'm ugly. Hello,
                IT. Have you tried forcing an unexpected reboot?</p>
            </div>
          </div>
          {/* 
          

          <div className="ministriesRow">
            <div id="home" className="left"></div>
          </div>
           */}
        </section>
      </main>
    </>
  );
}
