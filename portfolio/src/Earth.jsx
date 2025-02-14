import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from "@react-three/fiber"

export default function Earth({r, pos}){

    const gltf = useLoader(GLTFLoader, '/earth/scene.gltf')

    return (

        <primitive scale = {r} rotation = {[0, 3, -0.9]} object = {gltf.scene} position = {pos}/>

    )

}