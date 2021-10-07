import React from "react";
import "./style.css";
import HumanitarianPic from "../../images/costa-rica-carry.jpeg";
import ConstructionPic from "../../images/costa-rica-serve.jpeg";
import ChildrenProgramPic from "../../images/costa-rica-children-program.jpeg";
import BiblePic from "../../images/costa-rica-bible-distribute.jpeg";
import Indigenous from "../../images/costa-rica-indigenous.jpg";
import RehabPic from "../../images/costa-rica-rehab.jpeg";
import WorshipPic from "../../images/costa-rica-worship.jpeg";
import ActionPic from "../../images/costa-rica-action-sport.jpeg";
import Clothing from "../../images/costa-rica-clothing.jpeg";
import Card from "@material-ui/core/Card";
import {Helmet} from "react-helmet"
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useGlobalContext } from "../../context/store";
import Typography from "@material-ui/core/Typography";
import "./style.css";

export default function GetInvolved() {
  let data;
  const english = useGlobalContext().state.English;
  const spanish = useGlobalContext().state.Spanish;
  const bool = useGlobalContext().state.Bool;
  if (bool) {
    data = spanish;
  } else {
    data = english;
  }
  return (
    <div id="getInvolvedContain">
      <Helmet>
          <meta charSet="utf-8" />
          <meta
      name="description"
      content="Mission Opportunities in Central America"
    />
                <title>Mission Trips Central America</title>
                <link rel="canonical" href="https://surrenderedlife.org/costa-rica-mission-trips" />
          </Helmet>
      <h1 style={{ textAlign: "center", margin: "0px", padding: "20px" }}>
        {data.getInvolved}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          
            {data.getInvolvedText ===true ? <p>There are a couple of ways you can get involved! If you want to help directly in Costa Rica, we welcome local or international teams, send us an 
              {" "}<a href="mailto:vidarendida@gmail.com">Email</a>
            {" "} and we will discuss opportunities. You can also contribute through prayer! We apreciate any intercession on our behalf! Last but not least, you can make a monetary contribution {" "}
        <a
          href="https://christcentercashmere.churchcenter.com/giving/to/costa-rica-benedicts"
          target="_blank"
        > Here</a>.  </p>
       : <p>¡Hay un par de formas en las que puede participar! Si desea ayudar directamente en Costa Rica, damos la bienvenida a equipos locales o internacionales, envíenos un 
        {" "}<a href="mailto:vidarendida@gmail.com">Correo electrónico</a>{" "}
      y discutiremos oportunidades. ¡También puedes contribuir a través de la oración! ¡Agradecemos cualquier intercesión en nuestro nombre! Por último, pero no menos importante, puede hacer una contribución monetaria 
      {" "} <a
          href="https://christcentercashmere.churchcenter.com/giving/to/costa-rica-benedicts"
          target="_blank"
        >
           Aquí 
        </a>.
        </p>
      }
          
        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "0px", padding: "20px" }}>
        {data.costaRicaOutreach}
      </h1>
      <div id="cardFlexContain">
        <Card>
          <CardMedia
            component="img"
            image={HumanitarianPic}
            alt="Humanitarian Missions In Central America and Costa Rica"
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
        <Card>
          <CardMedia
            component="img"
            image={ConstructionPic}
            alt="Building Churches In Costa Rica"
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

        <Card>
          <CardMedia
            component="img"
            image={BiblePic}
            alt="Distributing Bibles In Costa Rica"
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
        <Card>
          <CardMedia component="img" image={RehabPic} alt="Rehabilitation Missions In Central America" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.rehabilitation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.rehabilitationText}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          
          <CardMedia
            component="img"
            image={ChildrenProgramPic}
            alt="Teaching Children About Jesus In Costa Rica"
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
        
        <Card>
          <CardMedia
            component="img"
            image={ActionPic}
            alt="Evangelizing Through Action Sports Central America"
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
        <Card>
          <CardMedia component="img" image={Indigenous} alt="Mission Trip To Central America Indigenous" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.indigenous}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.indigenousText}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia component="img" image={Clothing} alt="Distributing Afordable Clothing" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.clothing}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.clothingText}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia component="img" image={WorshipPic} alt="Worshiping God In Central America" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.worship}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.worshipText}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.other}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.otherText}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
