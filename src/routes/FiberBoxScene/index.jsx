/** @format */

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style.css';
const RotatingBox = () => {
  const boxRef = useRef();

  // Animate rotation and slight bounce effect
  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
      boxRef.current.rotation.z += 0.005;

      // Add a small bounce effect on the y-axis
      boxRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material-0" color="#ff4747" />{' '}
      {/* Right side */}
      <meshStandardMaterial attach="material-1" color="#ff4747" />{' '}
      {/* Left side */}
      <meshStandardMaterial attach="material-2" color="#ff6b6b" />{' '}
      {/* Top side */}
      <meshStandardMaterial attach="material-3" color="#ff6b6b" />{' '}
      {/* Bottom side */}
      <meshStandardMaterial attach="material-4" color="#ff4747" />{' '}
      {/* Front side */}
      <meshStandardMaterial attach="material-5" color="#ff4747" />{' '}
      {/* Back side */}
    </mesh>
  );
};

const FiberBoxScene = () => {
  return (
    <div className="gift-box">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Rotating Box with Solid Colors */}
        <RotatingBox />

        {/* Orbit Controls */}
        <OrbitControls enableDamping={true} />
      </Canvas>

      {/* CSS Bow */}
      <div className="bow" />
    </div>
  );
};

export default FiberBoxScene;
