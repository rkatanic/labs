import { Box, Capsule, Cone, Cylinder, Icosahedron } from "@react-three/drei";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";

interface Props {
  position: Vector3;
  rotation?: Euler;
  scale: number;
}

const Mountains = ({ position, rotation, scale }: Props) => (
  <group scale={scale} position={position} rotation={rotation}>
    <Cone
      args={[1.5, 1.5, 7]}
      position={[-3, -1.5, 5]}
      rotation={[0.6, 0.2, 0.1]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone args={[3.75, 2.5, 7]} position={[0, 0, 0]} rotation={[0.05, 0, -0.2]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone
      args={[1, 2.2, 4]}
      position={[0, -0.2, -5]}
      rotation={[-0.15, 0, -0.25]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone
      args={[1, 1.5, 5]}
      position={[2, -2.625, 5]}
      rotation={[0.5, 0, -0.4]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone args={[2, 1.2, 7]} position={[-7, -1, 0]} rotation={[0.175, 0, 0.5]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
  </group>
);

export default Mountains;
