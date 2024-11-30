import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function PhoneModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} position={[0, 0, 0]}>
      <boxGeometry args={[0.4, 0.8, 0.05]} />
      <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}