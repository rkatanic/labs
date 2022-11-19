import { Icosahedron } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import City from "./City";
import Factory from "./Factory";
import Mountains from "./Mountains";
import Pyramids from "./Pyramids";
import Tree from "./Tree";

const World = () => {
  const ref = useRef<any>();
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
      <pointLight position={[0, 0, 3]} intensity={0.75} />
      <Icosahedron visible args={[0.5, 2]} scale={1}>
        <meshPhongMaterial
          specular={"hsl(0,0%,12%)"}
          flatShading
          color={"hsl(0,0%,15%)"}
        />
      </Icosahedron>
      <Factory
        scale={0.04}
        position={[0.425, -0.35, -0.1]}
        rotation={[0, 0.15, -1.85]}
      />
      <Pyramids
        scale={0.04}
        position={[0.475, 0.19, 0]}
        rotation={[0, 0, -1]}
      />
      <Mountains
        scale={0.05}
        position={[-0.45, -0.2, -0.12]}
        rotation={[0.25, -0.25, 2.25]}
      />
      <City scale={0.06} position={[0, 0.2, 0.45]} rotation={[1, -1, 0]} />
      <Tree scale={0.06} position={[0, 0, 0.515]} rotation={[1.5, 0, 0]} />
    </group>
  );
};

export default World;
