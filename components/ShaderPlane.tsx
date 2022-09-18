import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial } from "./WaveMaterial";

const PlaneGeometry = (): JSX.Element => {
  const ref = useRef<any>();
  const { width, height } = useThree((state) => state.viewport);
  useFrame((state, delta) => (ref.current.time += delta));
  return (
    <mesh>
      <planeGeometry args={[1, 1, 16, 16]} />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        colorStart="hsl(0,0%,90%)"
        colorEnd="hsl(0,0%,80%)"
      />
    </mesh>
  );
};

const ShaderPlane = (): JSX.Element => {
  return (
    <Canvas className="z-20">
      <PlaneGeometry />
    </Canvas>
  );
};

export default ShaderPlane;
