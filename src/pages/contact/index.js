import React from 'react'
import "./style.css"
import EmailIcon from '@material-ui/icons/Email';
import {useGlobalContext} from "../../context/store"
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
        <div id="contactContain">
            <div id="contactBox">

            
            
             <h1 id="contactH1">Contact Us</h1>
             <hr></hr>
             <p id="contactPara">
                Questions? Need to get in touch? Send us an email!

             </p>
             <h2 id="contactH2">Email</h2>
             <hr></hr>
             
               
            <div className="linkContain">
            <EmailIcon style={{color: "#C09F80"}}/>
            </div>
            <div className="linkContain">
            <a style={{color: "#C09F80"}} href="mailto:vidarendida@gmail.com">vidarendida@gmail.com</a>
            </div>
            
            </div>
            
            
        </div>
    )
}
