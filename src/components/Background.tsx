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
        <Sphere />
        <pointLight intensity={1} position={[1.8, 1, 4]} />
        <EffectComposer>
          <Noise opacity={0.16} blendFunction={BlendFunction.ADD} />
          <HueSaturation saturation={0.2} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
