import React from 'react'
import "./style.css"
import EmailIcon from '@material-ui/icons/Email';
import {useGlobalContext} from "../../context/store"
import {Helmet} from "react-helmet"
export default function Contact() {
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
        <section id="contactContain">
          <Helmet>
          <meta charSet="utf-8" />
                <title>Contact Page</title>
                <link rel="canonical" href="https://surrenderedlife.org/contact" />
          </Helmet>
            <div id="contactBox">

            
            
             <h1 id="contactH1">{data.contact}</h1>
             <hr></hr>
             <p id="contactPara">
                {data.contactText}

             </p>
             <h2 id="contactH2">{data.email}</h2>
             <hr></hr>
             
               
            <div className="linkContain">
            <EmailIcon style={{color: "#C09F80"}}/>
            </div>
            <div className="linkContain">
            <a style={{color: "#C09F80"}} href="mailto:vidarendida@gmail.com">vidarendida@gmail.com</a>
            </div>
             <h2 id="contactH2">{data.donate}</h2>
             <hr></hr>
            <div className="linkContain">
            <a style={{color: "#C09F80"}} href="https://christcentercashmere.churchcenter.com/giving/to/costa-rica-benedicts" target="_blank">{data.donateText}</a>
            </div>
            
            </div>
            
            
        </section>
    )
}
