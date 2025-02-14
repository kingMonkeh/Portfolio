import { Text3D } from '@react-three/drei'
import { useState, useRef } from 'react';
import Divider from './Divider.jsx'
import CloseButton from 'react-bootstrap/CloseButton'
import Proj from './Proj.jsx'
import SectionText from './SectionText.jsx';

function Projects({onClick, font}){
    return (
      <SectionText onClick = {onClick} font = {font} pos = {[6.00, 80, -40]} text = "Projects"></SectionText>
    )
}

function ProjectsHtml({close}){

  return (

    <div id = "projectsContainer" className = "containe">
      <h1 style = {{textAlign : "center", userSelect : "none"}}>Projects</h1>
      <h6 style = {{textAlign : "center", userSelect : "none"}}>Fun projects I have done!</h6>
      <Divider></Divider>
      <h4 style = {{textAlign : "center"}}>2025 - Present</h4>
      <div className = "year">
        <Proj title = "Portfolio" text = "What you are currently looking at! Motivated by questions asking for samples of my work." img = "/test1.png" tech = "React, React Three Fiber (Threejs), Bootstrap, HTML/CSS"></Proj>
        <Proj title = "Centsible Cooking" text = "Hackathon project to help students learn how to cook, all while saving money. Submitted to Hackville." img = "/centsible.png" tech = "React, Typescript, Gemini API, HTML/CSS"></Proj>
        <Proj title = "Eventure" text = "DeltaHacks XI project made to help people create gatherings" img = "/eventure.jpg" tech = "React, Javascript, Express.js, google maps api, HTML/CSS, firebase"></Proj>
        <Proj title = "GaggleMaps" text = "GeeseHacks project submission to track student population around campus" img = "/gagglemaps.jpg" tech = "HTML/CSS, Javascript, Python, FastAPI, Opencv, Mysql, numpy, speech_recognition"></Proj>
      </div>
      <Divider></Divider>
      <h4 style = {{textAlign : "center"}}>2024 - 2025</h4>
      <div className = "year">
      <Proj title = "Goose Clicker" text = "Spinoff of cookie clicker!" img = "/gooseClicker.jpg" tech = "HTML/CSS, Javascript"></Proj>
        <Proj title = "Hangman Helper" text = "Never lose Hangman again! Created after I lost hangman 3 times in a row." img = "/hangman.jpg" tech = "Python, Matplotlib, numpy, tkinter"></Proj>
      </div>
      <Divider></Divider>
      <h4 style = {{textAlign : "center"}}>2023 - 2024</h4>
      <div className = "year">
        <Proj title = "Wordle clone" text = "remake of wordle for Grade 12 computer science final project. Code is no longer available :(" img = "/wordle.png" tech = "C++, graphics.h"></Proj>
      </div>
      <Divider></Divider>
      <h4 style = {{textAlign : "center"}}>2022 - 2023</h4>
      <div className = "year">
        <Proj title = "Pirates of the dead" text = "Platformer game for pygame community summer jam 2022" img = "/piratesofthedead.png" tech = "Python, Pygame"></Proj>
        <Proj title = "CCC Solutions" text = "collection of my ccc solutions" img = "/ccc.png" tech = "C++"></Proj>
      </div>
      <CloseButton onClick = {close} className = "close"></CloseButton>
    </div>

  )

}

export {Projects, ProjectsHtml}