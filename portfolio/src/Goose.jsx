import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from "@react-three/fiber"
import React, { useRef } from 'react'

export default function Goose({pos}){

    useFrame(function({clock}){
        //myGoose.current.rotation.x = clock.getElapsedTime();
        //myGoose.current.rotation.y = clock.getElapsedTime();
    });

    const myGoose = React.useRef();
    const gltf = useLoader(GLTFLoader, '/scene-v2/scene.gltf')

    return (

        <primitive scale = {3} ref = {myGoose} object = {gltf.scene} position = {pos}/>

    )

}