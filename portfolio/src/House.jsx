import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from "@react-three/fiber"

export default function House({pos}){

    const gltf = useLoader(GLTFLoader, '/the_mill/scene.gltf')

    return (

        <primitive scale = {4} rotation = {[0, Math.PI / 2 - 0.25, 0]} object = {gltf.scene} position = {pos}/>

    )

}