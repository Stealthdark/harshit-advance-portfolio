import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OrbCluster() {
  const groupRef = useRef<THREE.Group>(null);

  const orbPositions: [number, number, number][] = [
    [0, 0, 0],
    [1.8, 1.2, -0.5],
    [-1.5, 1.0, 0.3],
    [1.2, -1.4, 0.4],
    [-1.0, -1.6, -0.3],
    [2.2, -0.3, -0.8],
    [-2.0, 0.4, 0.6],
  ];

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshPhysicalMaterial
          color="#39ff14"
          emissive="#39ff14"
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Wireframe icosahedra */}
      {orbPositions.slice(1).map((pos, i) => (
        <mesh key={i} position={pos}>
          <icosahedronGeometry args={[0.3 + (i % 3) * 0.08, 0]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#39ff14" : "#7c3aed"}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 8, 60]} />
        <meshBasicMaterial color="#39ff14" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

const AboutScene = () => {
  return (
    <div className="about-scene">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} color="#39ff14" intensity={2} />
        <pointLight position={[-3, -2, -2]} color="#7c3aed" intensity={1.5} />
        <OrbCluster />
      </Canvas>
    </div>
  );
};

export default AboutScene;
