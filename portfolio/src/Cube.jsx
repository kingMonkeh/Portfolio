import { BoxGeometry } from "three/src/Three.Core.js";
import { useThree } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useState } from "react";
import { color } from "three/src/nodes/TSL.js";

function Cube({pos, size, coloring}){

    //Testing
    const curTime = useThree(function (state){ return state.clock;});
    console.log(curTime);

    return (
        <mesh position = {pos}>
            <boxGeometry args = {size} />
            <meshStandardMaterial args = {[{color : coloring }]} />
        </mesh>
    )

}

function SpecialCube({pos, size}){

    const [active, setActive] = useState(false);

    //Testing
    const curTime = useThree(function (state){ return state.clock;});
    console.log(curTime);

    return (
        <mesh position = {pos} onClick = {function(){console.log("Clicked :)"); setActive(!active)}}>
            <boxGeometry args = {size} />
            <meshStandardMaterial args = {[{color : (active ? "green" : "brown") }]} />
        </mesh>
    )

}

export {
    Cube,
    SpecialCube,
}