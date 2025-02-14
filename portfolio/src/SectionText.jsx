import { Text3D } from "@react-three/drei"
import { useState } from "react"

export default function SectionText({onClick, font, text, pos}){
    const [hovered, setHovered] = useState(false);
    return (
        <Text3D onClick = {onClick}
                onPointerOver={function(){setHovered(true)}}
                onPointerLeave={function(){setHovered(false)}}
                size = {10} 
                height = {4}
                font = {font}
                rotation = {[0, Math.PI / 2 - 0.25, 0]} 
                position = {pos}>
        {text}
        <meshStandardMaterial 
          color="white" 
          emissive={hovered ? "white" : "black"} 
          emissiveIntensity={hovered ? 2 : 0} 
        />
        </Text3D>
    )
}