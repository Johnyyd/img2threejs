import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- PLACEHOLDERS ---
// In a real project, replace these with useGLTF() to load actual .glb models of a laptop, desktop, etc.

export function LaptopPlaceholder(props: any) {
  const ref = useRef<THREE.Group>(null);
  return (
    <group ref={ref} {...props}>
      {/* Base */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[3, 0.1, 2]} />
        <meshStandardMaterial color="#444" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 1.05, -0.95]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function MonitorPlaceholder(props: any) {
  return (
    <group {...props}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[4, 2.5, 0.2]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Stand */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
    </group>
  );
}

function DesktopTowerPlaceholder(props: any) {
  return (
    <mesh {...props} position={[3, 1, 0]}>
      <boxGeometry args={[1.2, 2.5, 2.5]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.4} />
    </mesh>
  );
}

function KeyboardPlaceholder(props: any) {
  return (
    <mesh {...props} position={[0, 0.05, 1.5]}>
      <boxGeometry args={[2.5, 0.1, 0.8]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}

function MousePlaceholder(props: any) {
  return (
    <mesh {...props} position={[2, 0.05, 1.5]}>
      <boxGeometry args={[0.4, 0.15, 0.6]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}

export function ComputerModelsScene() {
  return (
    <div className="w-full h-[50vh] relative mt-16 rounded-xl overflow-hidden liquid-glass border border-white/10">
      <Canvas camera={{ position: [0, 4, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Setup */}
        <group position={[0, -1, 0]}>
          <MonitorPlaceholder />
          <DesktopTowerPlaceholder />
          <KeyboardPlaceholder />
          <MousePlaceholder />
          {/* Or if you prefer laptop instead of desktop+monitor: */}
          {/* <LaptopPlaceholder position={[-3, 0, 0]} /> */}
        </group>

        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute top-4 left-4 z-10 text-xs font-body uppercase tracking-widest text-white/50">
        // 3D Setup Preview
      </div>
    </div>
  );
}
