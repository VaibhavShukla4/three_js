/** @format */

import React from 'react';
import FiberBoxScene from './routes/FiberBoxScene';
import CylinderWithImage from './routes/CylinderWithImage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Account from './routes/Account';
import BlobScene from './routes/BlobScene';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Account />}>
        BlobMixer
        <Route index element={<CylinderWithImage />} />
        <Route path="cylinder" element={<CylinderWithImage />} />
        <Route path="mixer" element={<BlobScene />} />
        <Route path="threejs" element={<FiberBoxScene />} />
      </Route>
    </Routes>
    // <div>
    //   <ThreeJSExample />
    //   <div className="canvaa">
    //     <CylinderWithImage />
    //   </div>
    // </div>
  );
}

// const H1_vertual = <h1>Hello</h1>;
// const H1_real = document.createElement('h2');
// H1_real.innerText = 'hhi';
// console.dir(H1_vertual);
// console.dir(H1_real);

export default App;
