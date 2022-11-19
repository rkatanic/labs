import * as THREE from "three";
import React, {
  Suspense,
  useRef,
  useMemo,
  forwardRef,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import {
  Canvas,
  useFrame,
  useThree,
  useResource,
  useLoader,
} from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  EffectComposerContext,
  GodRays,
} from "@react-three/postprocessing";
import {
  Html,
  Circle,
  Dodecahedron,
  Tetrahedron,
  Octahedron,
  Sphere,
  MeshDistortMaterial,
  Box,
  Plane,
  Capsule,
  TorusKnot,
  Icosahedron,
  Cylinder,
  OrbitControls,
} from "@react-three/drei";
import {
  CylinderGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  SphereGeometry,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import useMousePosition from "../hooks/useMousePosition";
import { a, useTransition, config } from "@react-spring/three";
import Header from "./Header";
import Head from "next/head";
import Tree from "./Tree";
import City from "./City";
import Mountains from "./Mountains";
import Factory from "./Factory";
import Pyramids from "./Pyramids";
import World from "./World";

const Model = () => {
  const ref = useRef();
  // const mousePosition = useMousePosition();

  const { mouse } = useThree();
  // const mouseX = mousePosition.x / window.innerWidth - 0.5;
  // const mouseY = mousePosition.y / window.innerHeight - 0.5;

  useFrame(() => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.z -= 0.002;
  });

  return (
    <group ref={ref} scale={1}>
      <World />
    </group>
  );
};

const Background = () => {
  return (
    <Canvas className="background" camera={{ position: [0, 0, 1] }}>
      {/* <color attach="background" args={["hsl(0,0%,9%)"]} /> */}
      {/* <fog color="hsl(0,0%,20%)" attach="fog" near={8} far={30} /> */}
      <Suspense
        fallback={
          <Html center fullscreen>
            loading
          </Html>
        }
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[0, 0, 3]} intensity={0.75} />
        <pointLight position={[-10, -10, -100]} intensity={0.2} />
        <EffectComposer multisampling={0} disableNormalPass={true}>
          {/* <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          /> */}
          {/* <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={1}
            height={100}
            opacity={0.4}
          /> */}
          {/* <Noise opacity={0.025} /> */}
          {/* <Vignette eskil={false} offset={0.015} darkness={1} /> */}
        </EffectComposer>
        {/* <Triangles /> */}
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Background;
