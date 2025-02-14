export default function LowPolyCloud({ position }) {
  return (
    <group position={position}>
      {/* Base cloud shape */}
      <mesh position={[0, 0, 0]}>
        <dodecahedronGeometry args={[5, 0]} /> {/* Low-poly sphere */}
        <meshStandardMaterial color="white" flatShading />
      </mesh>

      {/* Additional fluffy parts */}
      <mesh position={[-3, 2, 0]}>
        <dodecahedronGeometry args={[4, 0]} />
        <meshStandardMaterial color="white" flatShading />
      </mesh>

      <mesh position={[3, 1, 0]}>
        <dodecahedronGeometry args={[4, 0]} />
        <meshStandardMaterial color="white" flatShading />
      </mesh>

      <mesh position={[1, -2, 1]}>
        <dodecahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color="white" flatShading />
      </mesh>
    </group>
  );
}