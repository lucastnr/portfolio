"use client";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  HueSaturation,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useRef } from "react";

function Sphere() {
  const meshRef = useRef<any>(null!);

  return (
    <mesh ref={meshRef} position={[-1.6, -1.4, -2]}>
      <sphereGeometry args={[6, 100, 100]} />
      <meshStandardMaterial color="#362938" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Sphere />
      <pointLight intensity={1} position={[1.8, 1, 4]} />
    </>
  );
}

function Effects() {
  return (
    <EffectComposer>
      <Noise opacity={1} blendFunction={BlendFunction.OVERLAY} />
      <HueSaturation saturation={0.3} />
    </EffectComposer>
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
        height: "100%",
      }}
    >
      <Suspense fallback={null}>
        <Scene />
        <Effects />
      </Suspense>
    </Canvas>
  );
}
