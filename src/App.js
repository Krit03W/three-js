import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import "./styles.css";

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <OrbitControls />
        <Scene />  
      </Canvas>
    </div>
  );
}

