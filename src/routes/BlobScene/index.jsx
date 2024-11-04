/** @format */

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Bla from './../../assets/map-world-with-gradient-green-blue-map-is-white-background-shows-all-continents-major-countries_14117-335222.avif';

// Custom Sphere with Iridescent Metallic Effect
const IridescentSphere = ({ showTexture }) => {
  const texture = useTexture(Bla);
  const outerSphereRef = useRef();
  const innerSphereRef = useRef();

  // Animate rotation for both spheres if needed
  useFrame(() => {
    outerSphereRef.current.rotation.y += 0.01; // Slow rotation for effect
    innerSphereRef.current.rotation.y += 0.01;
  });

  return (
    <>
      {/* Outer Sphere with Image Texture */}
      <mesh ref={outerSphereRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={texture} // Apply image texture on outer side
          metalness={0.5} // Adjust metalness for reflectivity
          roughness={0.5} // Adjust roughness for desired effect
          side={THREE.FrontSide} // Render only the outer side
        />
      </mesh>

      {/* Inner Sphere Transparent */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.99, 64, 64]} />{' '}
        {/* Slightly smaller to avoid z-fighting */}
        <meshStandardMaterial
          color="#00FFAA" // Optional color for inner effect
          opacity={0.3} // Set opacity to make the inner side transparent
          transparent={true} // Enable transparency
          side={THREE.BackSide} // Render only the inner side
        />
      </mesh>
    </>
  );
};

const BlobScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ height: '100vh', background: '#87CEEB' }}
      gl={{ alpha: true, preserveDrawingBuffer: true }} // Ensure transparency
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      {/* Sunlight Effect */}
      <pointLight position={[5, 5, 5]} intensity={2} color="#FFD700" />
      {/* Intense, sun-like light */}
      <mesh position={[5, 5, 5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>
      {/* Iridescent Sphere with conditional texture */}
      <IridescentSphere />
      {/* Environment map for reflections, without background */}
      <Environment preset="sunset" background={false} />
      {/* Orbit controls for interaction */}
      <OrbitControls />
    </Canvas>
  );
};

export default BlobScene;
