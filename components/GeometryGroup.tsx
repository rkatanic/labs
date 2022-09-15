import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Box,
  Dodecahedron,
  MeshDistortMaterial,
  Octahedron,
  OrbitControls,
  RoundedBox,
  Sphere,
  Tetrahedron,
  Text,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";

const color = "hsl(160,50%,45%)";

const GeometryGroup = () => {
  const Camera = () => {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();
    return useFrame(() =>
      camera.position.lerp(
        vec.set(mouse.x * 3.5, mouse.y * 1.25, camera.position.z),
        0.05
      )
    );
  };

  const Geometry = () => {
    const ref = useRef<any>();
    const ref2 = useRef<any>();

    useFrame(() => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
      ref2.current.rotation.y += 0.01;
      ref2.current.rotation.z += 0.01;
    });

    return (
      <group>
        <Box ref={ref} position={[0, 2, 0]} args={[1, 1, 1]}>
          <meshStandardMaterial color={color} />
        </Box>
        <Sphere position={[0, -2, 0]} args={[1, 50, 50]}>
          <meshStandardMaterial color={color} />
        </Sphere>
        <Tetrahedron position={[2.5, -0.5, 0.5]} args={[1]}>
          <meshStandardMaterial color={color} />
        </Tetrahedron>
        <TorusKnot position={[2.5, 2, 0.25]} args={[0.75, 0.2]}>
          <meshStandardMaterial color={color} />
        </TorusKnot>
        <Torus position={[0, 0.25, -1.5]} args={[1, 0.25, 10, 50]}>
          <meshStandardMaterial color={color} />
        </Torus>
        <Octahedron position={[-2, 1.5, 0.75]} args={[1, 1, 1]}>
          <meshStandardMaterial wireframe color={color} />
        </Octahedron>
        <Sphere position={[-3, -1, -1]} args={[1, 100, 100]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.5}
            speed={3}
          />
        </Sphere>
        <RoundedBox position={[-3, -3, 0]} args={[1.5, 1, 1.5]}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        <Dodecahedron ref={ref2} position={[2.25, -3, 0.5]} args={[1, 1, 1]}>
          <meshStandardMaterial wireframe color={color} />
        </Dodecahedron>
        <Text color={color} fontSize={0.5}>
          hello world!
        </Text>
      </group>
    );
  };
  
  return (
    <Canvas className="three-js-canvas" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 6, 4]} intensity={1.75} />
      <Suspense fallback={null}>
        <Geometry />
        <Camera />
        <OrbitControls minDistance={3} maxDistance={7} />
      </Suspense>
    </Canvas>
  );
};

export default GeometryGroup;
