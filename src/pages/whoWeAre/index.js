import React from 'react'
import "./style.css"
import { GlobalProvider, useGlobalContext } from "../../context/store";

export default function WhoWeAre() {
    const data = useGlobalContext().state.English
    console.log(data)



    return (
        <div>
            <div id="famPic">

            </div>
            
        </div>
    )
}