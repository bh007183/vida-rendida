import React from 'react'
import "./style.css"
import EmailIcon from '@material-ui/icons/Email';

export default function Contact() {
    return (
        <div id="contactContain">
            <div id="contactBox">

            
            
             <h1 id="contactH1">Contact Us</h1>
             <hr></hr>
             <p id="contactPara">
                Hello? I've had a bit of a tumble. They just toss us away like
                yesterday's jam. Yeah, you do know how a button works don't you?
                Uh... okay, well, the button on the side, is it glowing?

             </p>
             <h2 id="contactH2">Email</h2>
             <hr></hr>
             
               
            <div className="linkContain">
            <EmailIcon/>
            </div>
            <div className="linkContain">
            <a href="mailto:benedictfamilyministries@gmail.com">benedictfamilyministries@gmail.com</a>
            </div>
            
            </div>
            
            
        </div>
    )
}
