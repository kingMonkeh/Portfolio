import { Text3D } from '@react-three/drei'

function Name({font}){
    return (
      <Text3D size = {13} height = {5} font = {font} rotation = {[0, Math.PI / 2 - 0.25, 0]} position = {[-10, 120, 20]}>
        Hy Lac Nguyen
        <meshStandardMaterial color = {"gold"}></meshStandardMaterial>
      </Text3D>
    )
}

export default Name;