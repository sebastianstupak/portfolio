/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-array-index-key */
import React, { ReactNode, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrthographicCamera,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  RenderTexture,
  PerformanceMonitor
} from '@react-three/drei';
import { useWindowSize } from 'usehooks-ts';
import { max, min } from 'lodash';

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const opacityLoop = keyframes`
	0% { opacity: 0.8; }
	25% { opacity: 0.5; }
	50% { opacity: 0.75; }
	75% { opacity: 0.45; }
`;

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
`;

const CanvasWrapper = styled.div`
  height: 100%;
  width: 100%;

  opacity: 0.5;
  animation: ${opacityLoop} 10s ease infinite alternate;

  canvas {
    opacity: 0;
    touch-action: none;
    animation: ${fadeIn} 5s ease 1s forwards;
  }
`;

const FrostedGlass = ({ children }: { children: ReactNode }) => {
  const { width, height } = useThree(state => state.viewport);

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <MeshTransmissionMaterial
        samples={4}
        thickness={0.05}
        chromaticAberration={0.5}
        anisotropy={1}
        roughness={1.2}
        distortionScale={0}
        temporalDistortion={0}
      >
        <RenderTexture attach='buffer'>{children}</RenderTexture>
      </MeshTransmissionMaterial>
    </mesh>
  );
};

const NoisySphere = () => (
  <mesh position={[2, 0, 0]}>
    <sphereGeometry args={[4.25, 50, 64]} />
    <meshStandardMaterial
      color='#333'
      envMapIntensity={0.3}
      metalness={1}
      roughness={0.2}
    />
  </mesh>
);

const Ambience = () => {
  // Swirl camera around (we're inside the render texture)
  useFrame(state => {
    const t = state.clock.elapsedTime / 5;
    state.camera.position.set(
      Math.sin(t) * Math.PI * -3,
      Math.sin(t) * Math.PI * 4,
      Math.cos(t) * -Math.PI * 2
    );
    state.camera.lookAt(0, 0, 0);
  });

  // Render a custom environment map, this is what the sphere reflects
  return (
    <Environment path='hdr/' files='city.hdr' resolution={1024 / 2}>
      <group rotation={[-Math.PI / 3, -2, 4]}>
        <Lightformer
          intensity={4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={5}
          rotation-x={Math.PI / 8}
          position={[-5, 5, -9]}
          scale={[15, 50, 1]}
        />
        <Lightformer
          intensity={5}
          rotation-x={Math.PI / 20}
          position={[0, 2, -3]}
          scale={[15, 50, 1]}
        />
        <Lightformer
          intensity={5}
          rotation-x={Math.PI / 12}
          position={[-10, 15, 18]}
          scale={[10, 50, 1]}
        />
        {[2, 0, 8, 0, -8, 0, 2, 0].map((x, i) => (
          <Lightformer
            key={i}
            form='circle'
            intensity={4}
            rotation={[Math.PI / 2, -2, 10]}
            position={[x, 4, i * 4]}
            scale={[10, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={4}
          rotation-y={Math.PI / 2}
          position={[3, -6, -4]}
          scale={[100, 1, 1]}
        />
        <Lightformer
          intensity={6}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[100, 1, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[100, 1, 1]}
        />
      </group>
    </Environment>
  );
};

export const Background: React.FC = () => {
  const { width } = useWindowSize();
  const [dpr, setDpr] = useState(1);

  return (
    <CanvasContainer>
      <CanvasWrapper>
        <Canvas
          dpr={dpr}
          style={{ background: 'black' }}
          orthographic
          camera={{ position: [0, 0, 50], zoom: 100 }}
        >
          <PerformanceMonitor
            onChange={() => setDpr(1)}
            flipflops={3}
            onFallback={() => setDpr(1)}
          >
            <FrostedGlass>
              <OrthographicCamera
                makeDefault
                position={[0, 0, 50]}
                zoom={max([110, min([width / 4, 250])])}
              />
              <NoisySphere />
              <Ambience />
            </FrostedGlass>
          </PerformanceMonitor>
        </Canvas>
      </CanvasWrapper>
    </CanvasContainer>
  );
};

export default Background;
