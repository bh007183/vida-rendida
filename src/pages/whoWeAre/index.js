import React from 'react'
import "./style.css"
import famPic from "../../images/Family.jpeg"

import { GlobalProvider, useGlobalContext } from "../../context/store";

export default function WhoWeAre() {
    const data = useGlobalContext().state.English
    console.log(data)



    return (
        <div>
            <img stc={famPic} style={{width:"500px", height:"500px"}}id="famPic" >

            </img>
            
        </div>
    )
}