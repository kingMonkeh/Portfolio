import { Text3D } from '@react-three/drei'
import { useState } from 'react';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CloseButton from 'react-bootstrap/CloseButton'
import Divider from './Divider';
import SectionText from './SectionText';

function AboutMe({onClick, font}){
    return (
        <SectionText onClick = {onClick} font = {font} text = "About Me" pos = {[5.75, 100, -40]}></SectionText>
    )
}

function AboutMeHtml({close}){

  return (

    <div className = "containe" style = {{zIndex : 3, display : "flex", alignItems : "center", flexDirection : "column", gap : "5px", width : "40%", height : "90%"}}>
      <h1 style = {{textAlign : "center", marginBottom : "0"}}>Greetings! 🤓</h1>
      <Divider></Divider>
      <img src = "/me.jpg" style = {{height : "30%", objectFit : "contain"}}></img>
      <h6 style = {{fontSize : "0.75em", marginBottom : "0px"}}>🔼 Picture of me 🔼</h6>
      <h2 style = {{marginBottom : "-5px"}}>Hy Lac Nguyen</h2>
      <h5 style = {{marginBottom : "-2px"}}>1B cs at Uwaterloo</h5>
      <Divider></Divider>
      <p style = {{marginLeft : "10px", marginRight : "5px"}}>As part of my escape from unemployment, I have made many coding projects! Outside of coding, I like to spend my time watching movies or anime. I also love playing league of legends with friends!</p>
      <h6>Feel free to suggest me movies/anime!</h6>
      <CloseButton className = "close" onClick = {close}></CloseButton>
    </div>

  )

}

export {AboutMe, AboutMeHtml}