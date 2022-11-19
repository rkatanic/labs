import { Box, Capsule, Cone, Cylinder, Icosahedron } from "@react-three/drei";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";

interface Props {
  position: Vector3;
  rotation?: Euler;
  scale: number;
}

const Pyramids = ({ position, rotation, scale }: Props) => (
  <group scale={scale} position={position} rotation={rotation}>
    <Cone args={[1, 1, 4]} position={[-3, 0, -2]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone
      args={[2, 2.5, 4]}
      position={[-5.5, -0.2, -3.5]}
      rotation={[-0.3, 0, 0.2]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone args={[1.5, 1.5, 4]} position={[-6, -0.3, 0]} rotation={[0, 0, 0.3]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
    <Cone args={[2, 1.75, 4]} position={[-2.75, 0, 0.5]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cone>
  </group>
);

export default Pyramids;
