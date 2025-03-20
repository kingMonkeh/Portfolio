import SectionText from "./SectionText"
import { useState } from "react"
import { useEffect } from "react"

function WorkExperience({onClick, font}){

    return (

        <SectionText onClick = {onClick} font = {font} pos = {[-6.5, 60, 10]} text = "Work Experience"></SectionText>

    )

}

function WorkExperienceHtml({parentOpen}){

    const [hovered, setHovered] = useState(false);

    return (

        <>

        <h6 style = {{color : "white", position : "absolute", bottom : "15%"}}>Click to view resume!</h6>
        <h6 style = {{color : "rgba(255, 255, 255, 0.5)", position : "absolute", top : "10%"}}>Click anywhere else to close!</h6>
            <img src = {hovered ? "/env2.png" : "/env1.png"} style = {{position : "absolute", objectFit : "contain", width : "45%", zIndex : 5}} onClick = {function(e){e.stopPropagation(); window.open("/Resume (13).pdf", "_blank");}} onMouseLeave={function(){setHovered(false)}} onMouseOver = {function(){setHovered(true)}}></img>
        </>

    )

}

export {WorkExperience, WorkExperienceHtml}