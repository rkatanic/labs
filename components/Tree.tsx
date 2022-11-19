import { Capsule, Icosahedron } from "@react-three/drei";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";

interface Props {
  position: Vector3;
  rotation?: Euler;
  scale: number;
}

const Tree = ({ position, rotation, scale }: Props) => (
  <group scale={scale} position={position} rotation={rotation}>
    <Icosahedron visible args={[0.5, 2]} scale={1} position={[0, 1, 0]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,15%)"}
      />
    </Icosahedron>
    <Icosahedron visible args={[0.5, 1]} scale={0.6} position={[0.4, 0.175, 0]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,15%)"}
      />
    </Icosahedron>
    <Icosahedron visible args={[0.5, 2]} scale={1} position={[0, 1, 0]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,15%)"}
      />
    </Icosahedron>
    <Icosahedron visible args={[0.5, 1]} scale={0.4} position={[-0.35, 0.4, 0]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,15%)"}
      />
    </Icosahedron>
    <Capsule scale={0.03} position={[0, 0, 0]} args={[3, 36, 3, 7]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,16%)"}
      />
    </Capsule>
    <Capsule
      rotation={[0, 0, -0.75]}
      scale={0.03}
      position={[0.2, -0.1, 0]}
      args={[3, 16, 3, 7]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,12%)"}
      />
    </Capsule>
    <Capsule
      rotation={[0, 0, 0.75]}
      scale={0.03}
      position={[-0.15, 0.2, 0]}
      args={[3, 10, 3, 7]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,12%)"}
      />
    </Capsule>
  </group>
);

export default Tree;
