import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  useTexture,
  shaderMaterial,
  Html,
  Text,
  OrbitControls,
} from "@react-three/drei";
import GeometryGroup from "./GeometryGroup";
// import myFont from "../public/Spectral-Medium.ttf";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

// const font = new FontLoader().parse(myFont);

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({ ImageFadeMaterial });

const Geometry = (props: any) => {
  const ref = useRef<any>();
  const { mouse, camera } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    ref.current.rotation.y = mouse.x >= 0 ? mouse.x * 0.125 : 0;
    ref.current.rotation.x = mouse.y >= 0 ? -mouse.y * 0.125 : 0;

    camera.position.lerp(
      vec.set(-mouse.x * 0.125, -mouse.y * 0.125, camera.position.z),
      0.05
    );
  });

  return (
    <mesh>
      <Text
        font="/Spectral-SemiBold.ttf"
        position={[1.5, 0.25, 0]}
        maxWidth={2}
        ref={ref}
        color="#fff"
        fontSize={0.75}
        lineHeight={1}
      >
        {props.clicked ? " Garden Eight" : "Something"}
      </Text>
    </mesh>
  );
};

function FadingImage(props: any): JSX.Element {
  const imageOne = "/img-1.jpeg";
  const imageTwo = "/img-2.jpg";

  const imageThree = "/img-3.jpg";
  const imageFour = "/img-4.jpg";
  const images = [imageOne, imageTwo, imageThree, imageFour];

  const [current, setCurrent] = useState(0);

  const setNextSlide = () => {
    setHover((prevState) => !prevState);
    props.setClicked();
  };

  const [hovered, setHover] = useState(false);

  const ref = useRef<any>();

  const [texture1, texture2, dispTexture] = useTexture([
    images[current],
    images[current + 1],
    "/displacement.jpeg",
  ]);

  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(
      ref.current.dispFactor,
      hovered ? 1 : 0,
      0.075
    );
  });
  return (
    <mesh>
      <planeGeometry args={[1.75, 0.825]} />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
      <Html position={[0.75, 0.5, 0]}>
        <button onClick={setNextSlide} style={{ color: "red" }}>
          click me(current:{current}) next: {current + 1}
        </button>
      </Html>
    </mesh>
  );
}

const ImageSlider = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Suspense fallback={null}>
      <Canvas className="image-slider" camera={{ position: [0, 0, 1.5] }}>
        <FadingImage setClicked={() => setClicked((prevState) => !prevState)} />
      </Canvas>

      <Canvas className="title-wrapper" camera={{ position: [0, 0, 3] }}>
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[-2, 6, 4]} intensity={1.75} /> */}
        <Suspense fallback={null}>
          <Geometry clicked={clicked} />
          {/* <Camera /> */}
          {/* <OrbitControls minDistance={7} maxDistance={7} enableZoom={false} /> */}
        </Suspense>
      </Canvas>
    </Suspense>
  );
};

export default ImageSlider;
