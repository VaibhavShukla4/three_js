/** @format */

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for DoubleSide
import Bla from './../../assets/colorful-multiplication-table-between-1-260nw-2495550593.webp';
import './style.css';
const TexturedCylinder = () => {
  // Load the image texture
  const texture = useTexture(Bla); // Replace with your image path

  return (
    <mesh>
      {/* Define open-ended cylinder geometry */}
      <cylinderGeometry args={[1, 1, 1, 52, 1, true, 10]} />

      {/* Apply texture to the material and make it double-sided */}
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

const CylinderWithImage = () => {
  return (
    <div className="canvaa">
      <Canvas camera={{ position: [5, 5, 5] }} style={{ height: '100vh' }}>
        {/* Lighting for better appearance */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Add the textured cylinder */}
        <TexturedCylinder />

        {/* OrbitControls for interaction */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default CylinderWithImage;
