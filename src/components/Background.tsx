"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  HueSaturation,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useRef } from "react";

function Box() {
  const meshRef = useRef<any>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.z += 0.01;
    meshRef.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[-1.6, -1.4, -2]}>
      <sphereGeometry args={[6, 100, 100]} />
      <meshStandardMaterial color="#362938" />
    </mesh>
  );
}

export function Background() {
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      style={{
        width: "100%",
        maxWidth: "2000px",
        height: "100%",
      }}
    >
      <Suspense fallback={null}>
        <Box />
        <pointLight intensity={1.3} position={[3, 1, 4]} />
        <EffectComposer>
          <Noise opacity={0.3} blendFunction={BlendFunction.ADD} />
          <HueSaturation hue={0.1} saturation={0.3} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
