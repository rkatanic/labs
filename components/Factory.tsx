import {
  Box,
  Capsule,
  Cone,
  Cylinder,
  Icosahedron,
  Tetrahedron,
} from "@react-three/drei";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";

interface Props {
  position: Vector3;
  rotation?: Euler;
  scale: number;
}

const Factory = ({ position, rotation, scale }: Props) => (
  <group scale={scale} position={position} rotation={rotation}>
    <Icosahedron args={[1.5, 2]} position={[-3, -2, -2]}>
      <meshBasicMaterial wireframe color={"hsl(0,0%,28%)"} />
    </Icosahedron>
    <Icosahedron args={[0.5, 1]} position={[1.75, -3.5, -2.5]}>
      <meshBasicMaterial wireframe color={"hsl(0,0%,28%)"} />
    </Icosahedron>
    <Box
      args={[1, 2.5, 1]}
      position={[-1.5, -2.2, -4.5]}
      rotation={[-0.3, 0, -0.3]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Box args={[1, 1, 2]} position={[0.5, -2.2, -2]} rotation={[-0.3, 0, -0.3]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Box
      args={[1, 1, 1]}
      position={[0.25, -3, -4.25]}
      rotation={[-0.3, 0, -0.3]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Cylinder
      args={[0.35, 0.35, 0.75]}
      position={[0.75, -1.5, -1.75]}
      rotation={[-0.3, 0, -0.3]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cylinder>
    <Cylinder
      args={[0.35, 0.35, 0.75]}
      position={[0.75, -1.75, -2.625]}
      rotation={[-0.3, 0, -0.3]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cylinder>
  </group>
);

export default Factory;
