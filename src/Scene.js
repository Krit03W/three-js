import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere, Box, Torus } from "@react-three/drei";

function RotatingBox() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <Box ref={ref} args={[1, 1, 1]} position={[-2, 1, 0]}>
      <meshStandardMaterial attach="material" color="blue" />
    </Box>
  );
}

function FloatingSphere() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y = 1 + Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <Sphere ref={ref} args={[0.7, 32, 32]} position={[2, 1, 0]}>
      <meshStandardMaterial attach="material" color="red" />
    </Sphere>
  );
}

function RotatingTorus() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.02;
  });

  return (
    <Torus ref={ref} args={[0.5, 0.2, 30, 100]} position={[0, 1, -2]}>
      <meshStandardMaterial attach="material" color="green" />
    </Torus>
  );
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, 5, 5]} intensity={1} color="yellow" />

      <RotatingBox />
      <FloatingSphere />
      <RotatingTorus />
      <Text fontSize={1} position={[0, 2.5, 0]} color="white">
        Krit Wijak Manoprang
      </Text>
    </>
  );
}
