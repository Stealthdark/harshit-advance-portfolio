import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TorusRing() {
  const torusRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!torusRef.current || !innerRef.current) return;
    const t = clock.getElapsedTime();
    torusRef.current.rotation.x = t * 0.25;
    torusRef.current.rotation.y = t * 0.18;
    innerRef.current.rotation.x = -t * 0.15;
    innerRef.current.rotation.z = t * 0.2;
  });

  return (
    <group>
      <mesh ref={torusRef}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshPhysicalMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh ref={innerRef}>
        <torusGeometry args={[1.2, 0.06, 8, 80]} />
        <meshBasicMaterial color="#39ff14" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

const ContactScene = () => {
  return (
    <div className="contact-scene">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]} color="#7c3aed" intensity={3} />
        <pointLight position={[-3, -3, 2]} color="#39ff14" intensity={2} />
        <TorusRing />
      </Canvas>
    </div>
  );
};

export default ContactScene;
