
function Sphere({pos, r, meshProp}){

    return (

        <mesh position = {pos}>
            <sphereGeometry args={[r, 12, 12]}></sphereGeometry>
            <meshStandardMaterial args = {meshProp}></meshStandardMaterial>
        </mesh>

    )

}

export default Sphere