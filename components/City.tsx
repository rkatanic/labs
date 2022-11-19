import { Box, Capsule, Cylinder, Icosahedron } from "@react-three/drei";
import { Euler, useFrame, useThree, Vector3 } from "@react-three/fiber";

interface Props {
  position: Vector3;
  rotation?: Euler;
  scale: number;
}

const City = ({ position, rotation, scale }: Props) => (
  <group scale={scale} position={position} rotation={rotation}>
    <Box args={[1, 4, 1]} position={[0, 1, 1]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Box args={[1, 3, 1]} position={[-1.5, 0.5, 2.5]} rotation={[0.2, 0, 0]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Box args={[1, 2, 1]} position={[0, 0, 2.5]} rotation={[0.2, 0, -0.2]}>
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Box
      args={[1, 2.5, 1]}
      position={[1.5, -0.25, 3.5]}
      rotation={[0.25, 0, -0.25]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Box
      args={[1, 1.5, 1]}
      position={[3.5, -0.625, -1.5]}
      rotation={[-0.125, 0, -0.375]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Box>
    <Cylinder
      args={[1, 1, 1]}
      position={[-1.5, -1.75, 5]}
      rotation={[0.625, 0, 0.125]}
    >
      <meshPhongMaterial
        specular={"hsl(0,0%,12%)"}
        flatShading
        color={"hsl(0,0%,20%)"}
      />
    </Cylinder>
  </group>
);

export default City;
