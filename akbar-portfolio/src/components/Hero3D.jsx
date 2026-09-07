import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function GlowingPolyhedron() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous ambient rotation
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;

      // Smooth lerp tilt following mouse position
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshStandardMaterial
          color="#EF4444"
          emissive="#7F1D1D"
          emissiveIntensity={0.65}
          wireframe
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[420px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#FF2E4D" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#3B82F6" />
        <GlowingPolyhedron />
      </Canvas>
    </div>
  );
}