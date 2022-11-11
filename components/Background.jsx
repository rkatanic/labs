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
} from "@react-three/drei";
import { SphereGeometry } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import useMousePosition from "../hooks/useMousePosition";
import { a, useTransition, config } from "@react-spring/three";
import Header from "./Header";
import Head from "next/head";

const Triangle = ({ position, r, rotation, args }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.z += r * 0.01;
  });

  return (
    <mesh ref={ref}>
      <Circle rotation={rotation} position={position} args={args}>
        <meshStandardMaterial color="hsl(0,0%,16%)" />
      </Circle>
    </mesh>
  );
};

const Triangles = () => {
  const triangles = [
    {
      args: [1.5, 0, 2],
      position: [-6.5, -1, 0],
      rotation: [-1.57, -0.1, 2.5],
      r: 0.025,
    },
    {
      args: [0.5, 0, 0],
      position: [6, -3.75, 0],
      rotation: [0.25, 0.52, 15],
      r: 0.1,
    },
    {
      args: [1.5, 0, 0],
      position: [7.5, -5.25, 1],
      rotation: [1.5, -0.73, 1],
      r: 0.05,
    },
    {
      args: [0.35, 0, 0],
      position: [-6, -4, 0],
      rotation: [0, 0, 0],
      r: 0.025,
    },
    {
      args: [0.75, 0, 0],
      position: [-7, -3, 1],
      rotation: [0.7, 0.9, 1],
      r: 0.01,
    },
    {
      args: [1.25, 0, 0],
      position: [-4, 8, -2],
      rotation: [0.1, 0.5, 20],
      r: 0.025,
    },
    {
      args: [1.75, 0, 0],
      position: [7, 1.5, 4],
      rotation: [0.2, 0.2, 0],
      r: 0.25,
    },
    {
      args: [0.75, 0, 0],
      position: [-3, 3, -2],
      rotation: [0.8, -0.24, 0],
      r: 0.12,
    },
    {
      args: [0.25, 0, 0],
      position: [-7, -3, 2],
      rotation: [0.1, 0.9, 0],
      r: 0.36,
    },
    {
      args: [0.75, 0, 0],
      position: [7, 0, 1],
      rotation: [0.7, 0.1, 0],
      r: 0.2,
    },
    {
      args: [1.5, 0, 0],
      position: [2, -3.5, 5],
      rotation: [-0.25, 1.2, 0],
      r: 0.05,
    },
    {
      args: [0.35, 0, 0],
      position: [4, 2, 2],
      rotation: [0.4, -1.4, 0],
      r: 0.1,
    },
    {
      args: [0.15, 0, 0],
      position: [3.5, 1.75, 2],
      rotation: [0, 0.5, 3],
      r: 0.23,
    },
    { args: [1.1, 0, 0], position: [8, 0, 3], rotation: [1.1, 0, 0], r: 0.35 },
    {
      args: [1, 0, 0],
      position: [-4, 2.5, 5],
      rotation: [1.5, 0, 20],
      r: 0.15,
    },
    {
      args: [1.12, 0, 0],
      position: [12, -7, -2],
      rotation: [-0.52, 0.76, 20],
      r: 0.15,
    },
    {
      args: [0.65, 0, 0],
      position: [5, 2, 2],
      rotation: [-0.52, 0.76, 20],
      r: 0.125,
    },
    {
      args: [0.65, 0, 0],
      position: [-3, 7, 1],
      rotation: [-0.7, 1.2, 0],
      r: 0.135,
    },
    {
      args: [2.5, 0, -2],
      position: [-10, 0, 0],
      rotation: [0.8, 0, 0],
      r: 0.25,
    },
    {
      args: [0.5, 0, 2],
      position: [-3, 6, -3],
      rotation: [0.5, 1.25, 0],
      r: 0.35,
    },
    {
      args: [0.25, 0, 2],
      position: [7, 4, -1],
      rotation: [-0.52, 0.2, 0],
      r: 0.15,
    },
    {
      args: [1.25, 0, 2],
      position: [-3, -3, 2],
      rotation: [1, 0.29, 0.25],
      r: 0.15,
    },
    {
      args: [1.25, 0, 0],
      position: [12, -5, 1],
      rotation: [-1.25, 0.5, 0],
      r: 0.25,
    },
    {
      args: [0.5, 0, 0],
      position: [1, 3, -1],
      rotation: [0, -1.5, 0],
      r: 0.25,
    },
  ];

  const ref = useRef();

  return (
    <group ref={ref}>
      {triangles.map((triangle, i) => (
        <Triangle
          key={i}
          position={triangle.position}
          r={triangle.r}
          rotation={triangle.rotation}
          args={triangle.args}
        />
      ))}
      <directionalLight position={[-2, 7, 5]} intensity={1.5} />
    </group>
  );
};

const Model = () => {
  const { scene, materials, nodes } = useGLTF("./cat-remodeled.glb");
  const ref = useRef();
  // const mousePosition = useMousePosition();
  const { mouse } = useThree();
  // const mouseX = mousePosition.x / window.innerWidth - 0.5;
  // const mouseY = mousePosition.y / window.innerHeight - 0.5;

  const transition = useTransition(
    {},
    {
      from: {
        position: [0, -6, -1.5],
        rotation: [1.5, 0, 0.4],
        scale: [0.0175, 0.0175, 0.0175],
      },
      enter: {
        position: [0, -1.625, -1.5],
        rotation: [0, 0, 0],
        scale: [0.04, 0.04, 0.04],
      },
      config: { mass: 1.25, tension: 180, friction: 12 },
    }
  );

  useFrame(() => {
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -mouse.y * 0.25,
      0.125
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.position.x * 0.25,
      mouse.y,
      0.00025
    );
    ref.current.position.x = THREE.MathUtils.lerp(
      mouse.x * 2,
      ref.current.position.x,
      0.0125
    );
  });

  useLayoutEffect(() => {
    Object.assign(materials.Default, {
      roughness: 2,
      metalness: 1.45,
      emissive: new THREE.Color("hsl(0,0%,12%)"),
    });
  }, [scene, materials]);

  return transition((props, { position }) => (
    <a.mesh
      ref={ref}
      material={nodes.mesh_0.material}
      geometry={nodes.mesh_0.geometry}
      position={[0, -1.625, -1.5]}
      scale={0.0375}
      {...props}
    ></a.mesh>
  ));
};

const Background = () => {
  return (
    <Canvas className="background" camera={{ position: [0, 0, 10] }}>
      <color attach="background" args={["hsl(0,0%,9%)"]} />
      <fog color="hsl(0,0%,20%)" attach="fog" near={8} far={30} />
      <Suspense
        fallback={
          <Html center fullscreen>
            loading
          </Html>
        }
      >
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.79}
            height={300}
            opacity={50}
          />
          <Noise opacity={0.025} />
          <Vignette eskil={false} offset={0.015} darkness={1.35} />
        </EffectComposer>
        <Triangles />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Background;
