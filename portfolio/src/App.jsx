import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Bloom, EffectComposer, Outline } from "@react-three/postprocessing"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader'
import { AboutMe, AboutMeHtml } from './AboutMe.jsx'
import './App.css'
import Car from './Car.jsx'
import Cloud from './Cloud.jsx'
import { Cube, SpecialCube } from "./Cube.jsx"
import Divider from './Divider.jsx'
import Earth from './Earth.jsx'
import Goose from "./Goose.jsx"
import House from './House.jsx'
import Name from './Name.jsx'
import { Projects, ProjectsHtml } from './Projects.jsx'
import Sphere from './Sphere.jsx'
import { WorkExperience, WorkExperienceHtml } from './WorkExperience.jsx'
import { ContactMe, ContactMeHtml } from './ContactMe.jsx'


function App() {
  const font = useLoader(TTFLoader, "/minecraft-ten-font/MinecraftTen-VGORe.ttf")
  const [showStats, setShowStats] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [workExperienceOpen, setWorkExperienceOpen] = useState(false);
  const [contactMeOpen, setContactMeOpen] = useState(false);
  const [carPos, setCarPos] = useState([0, 0, 0]);

  return (
    <>
    <h2 id = "tooltip">Left-click to rotate • Scroll to zoom</h2>
    <div className = "overlay" style = {{visibility : projectsOpen ? "visible" : "hidden"}}>
      <ProjectsHtml close = {function(){setProjectsOpen(false)}}></ProjectsHtml>
    </div>
    <div className = "overlay" style = {{visibility : aboutMeOpen ? "visible" : "hidden", zIndex : 3}}>
      <AboutMeHtml close = {function(){setAboutMeOpen(false)}}></AboutMeHtml>
    </div>
    <div className = "overlay" onClick = {function(){setWorkExperienceOpen(false)}} style = {{visibility : workExperienceOpen ? "visible" : "hidden", zIndex : 4}}>
      <WorkExperienceHtml parentOpen = {workExperienceOpen}></WorkExperienceHtml>
    </div>
    <div className = "overlay" onClick = {function(){setContactMeOpen(false)}} style = {{visibility : contactMeOpen ? "visible" : "hidden", zIndex : 5}}>
      <ContactMeHtml></ContactMeHtml>
    </div>
    <div id="canvas-container">
      <Canvas camera = {{position : [300, 150, 0], far : 50000}}>
        {showStats && <Stats />}
        <ambientLight intensity={0.4}></ambientLight>
        <pointLight position = {[15, 150, 15]} intensity={200} distance = {500} decay = {1}></pointLight>
        <Earth r = {58} pos = {[0, -510, 0]}></Earth>
        <Car pos = {carPos}></Car>
        <SpecialCube size = {[2, 15, 2]} pos = {[-10, 8, 15]}></SpecialCube>
        <Name font = {font}></Name>
        <AboutMe font = {font} onClick = {function(){setAboutMeOpen(true)}}></AboutMe>
        <Projects font = {font} onClick = {function(){setProjectsOpen(true)}}></Projects>
        <WorkExperience onClick = {function(){setWorkExperienceOpen(true)}} font = {font}></WorkExperience>
        <ContactMe font = {font} onClick = {function(){setContactMeOpen(true)}}></ContactMe>
        <Sphere pos = {[15, 170, 15]} r = {20} meshProp = {[{color : "orange", emissive : "yellow", emissiveIntensity : 2, opacity : 0.5}]}></Sphere>
        <Environment files = "/starmap_2020_4k_11zon.jpg" background />
        <OrbitControls enablePan = {false} enableZoom={true} autoRotateSpeed = {3} zoomSpeed = {2} minDistance={1} maxDistance={2000} />
        <EffectComposer resolutionScale = {1}>
        <Bloom 
          intensity={0.6} 
          luminanceThreshold={0.2} 
          luminanceSmoothing={0.5} 
          mipmapBlur
        />
        </EffectComposer>
      </Canvas>
    </div>
    </>
  )
}

export default App;