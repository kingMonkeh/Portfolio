import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import Goose from "./Goose.jsx"

export default function Car({pos}) {
  // Load the model
  const { scene, animations } = useGLTF("/low-poly_truck_car_drifter/scene.gltf"); // Replace with your file

  // Load animations
  const { actions, mixer } = useAnimations(animations, scene);

  // Play animation on mount
  useEffect(() => {
    if (actions["Car engine"]) {
      actions["Car engine"].play();
    }
  }, [actions]);

  useEffect(function(){
    function handleKeyPress (e){
      console.log("press");
      if (e.key == 'w' || e.key == 'W'){
        console.log("W pressed");
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return function(){window.removeEventListener('keydown', handleKeyPress)};
  }, []);

  return (
    <group position={pos}>
        <primitive object={scene} scale={0.1} />
        <Goose pos = {[-8, 26.5, 4]}></Goose>
    </group>
  ) 
  
}