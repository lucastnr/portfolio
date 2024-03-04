"use client";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  HueSaturation,
  Noise,
} from "@react-three/postprocessing";
import { animate, useMotionValue } from "framer-motion";
import { BlendFunction } from "postprocessing";
import { Suspense, useEffect, useRef, useState } from "react";

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
  const lightIntensityMotion = useMotionValue(1.1);
  const [lightIntensity, setLightIntensity] = useState(
    lightIntensityMotion.get()
  );

  useEffect(() => {
    const unsubscribe = lightIntensityMotion.on("change", setLightIntensity);

    const control = animate(lightIntensityMotion, 0.7, {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });

    return () => {
      control.stop();
      unsubscribe();
    };
  }, []);

  console.log({ lightIntensity });

  return (
    <>
      <Sphere />
      <pointLight intensity={lightIntensity} position={[1.8, 1, 4]} />
    </>
  );
}

function Effects() {
  return (
    <EffectComposer>
      <Noise opacity={0.7} blendFunction={BlendFunction.OVERLAY} />
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
