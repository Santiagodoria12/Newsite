import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import PhoneModel from './PhoneModel';

export default function Scene() {
  return (
    <div className="h-screen w-full absolute top-0 left-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PhoneModel />
      </Canvas>
    </div>
  );
}