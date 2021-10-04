import React from "react";
import "./style.css";
import HumanitarianPic from "../../images/costa-rica-carry.jpeg";
import ConstructionPic from "../../images/costa-rica-serve.jpeg";
import ChildrenProgramPic from "../../images/costa-rica-children-program.jpeg";
import BiblePic from "../../images/costa-rica-bible-distribute.jpeg";
import TrekPic from "../../images/costa-rica-trek.jpeg";
import WorshipPic from "../../images/costa-rica-worship.jpeg";
import ActionPic from "../../images/costa-rica-action-sport.jpeg";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {useGlobalContext} from "../../context/store"
import Typography from "@material-ui/core/Typography";
import "./style.css";

export default function GetInvolved() {
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
    <div id="getInvolvedContain">
      <h1 style={{ textAlign: "center", margin: "0px", padding: "20px" }}>{data.costaRicaOutreach}</h1>
      <div id="cardFlexContain">
        <Card >
          <CardMedia
            component="img"
            image={HumanitarianPic}
            alt="humanitarian aid in costa rica"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.humanitarian}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.humanitarianText}
            </Typography>
          </CardContent>
        </Card>
        <Card >
          <CardMedia
            component="img"
            image={ConstructionPic}
            alt="building churches costa rica"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.construction}
              
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.constructionText}
            </Typography>
          </CardContent>
        </Card>
        <Card >
          <CardMedia
            component="img"
            image={ChildrenProgramPic}
            alt="Childrens ministry"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.children}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.childrenText}
            </Typography>
          </CardContent>
        </Card>
       
        <Card >
          <CardMedia
            component="img"
            image={WorshipPic}
            alt="Worship"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.worship}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.worshipText}
            </Typography>
          </CardContent>
        </Card>
        <Card >
          <CardMedia
            component="img"
            image={BiblePic}
            alt="Distributing bibles costa rica"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {data.bible}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.bibleText}
            </Typography>
          </CardContent>
        </Card>
        <Card >
          <CardMedia
            component="img"
            image={ActionPic}
            alt="action sport ministry"
          />
          <CardContent> 
            <Typography gutterBottom variant="h5" component="div">
              {data.evangelism}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.evangelismText}
            </Typography>
          </CardContent>
        </Card>
        <Card >
          <CardMedia
            component="img"
            image={TrekPic}
            alt="treking to village"
          />
          <CardContent> 
            <Typography gutterBottom variant="h5" component="div">
              {data.indigenous}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.indigenousText}
            </Typography>
          </CardContent>
        </Card>
      </div>
      STREET EVANGELISM
      {/* HUMANITARIAN AID- Clothing/groceries to those in great poverty. (Visiting homes in low income communities or slums or on the streets)
Construction projects (building churches or repairing homes. */}
      {/* Children’s ministries (Sunday school classes) (outreaches to children in communities using activities) */}
      Women’s or men’s ministry Rehabilitation of those in addictions
      (partnership with misión rescate CR) then discipleship and follow-up.
      Action sports outreach Ministry to indigenous groups. Worship music
      project Bringing Bibles to communities without access to the word
    </div>
  );
}
