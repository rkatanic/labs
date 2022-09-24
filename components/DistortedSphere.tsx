import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";

const DistortedSphere = (): JSX.Element => {
  const Geometry = () => {
    const ref = useRef<any>();
    const { mouse } = useThree();

    // useFrame(() => {
    //   ref.current.rotation.y = mouse.x * 0.5;
    //   ref.current.rotation.x = mouse.y * 0.5;
    // });
    return (
      <TorusKnot ref={ref} args={[1, 0.0015, 1000, 100, 12, 23]}>
        <MeshDistortMaterial
          wireframe
          color={"hsl(32,40%,38%)"}
          attach="material"
          distort={0.0}
          speed={5}
        />
      </TorusKnot>
    );
  };
  return (
    <Canvas className="sphere" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Geometry />
      </Suspense>
    </Canvas>
  );
};

export default DistortedSphere;
