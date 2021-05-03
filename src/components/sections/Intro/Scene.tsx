import React, { FC, useContext, useRef } from 'react';
import { DirectionalLight } from 'three';
import Shape from './Shape';
import { BridgeContext } from './Bridge';

interface SceneProps {}

const Scene: FC<SceneProps> = () => {
  const shiftX = 3;
  const mainColor = '#242830';
  const { theme } = useContext(BridgeContext);
  const light = useRef<DirectionalLight>();
  const sizeBig = Math.floor(Math.random() * 10) + 35;
  const sizeMedium = Math.floor(Math.random() * 5) + 5;
  const sizeSmall = Math.floor(Math.random() * 5) + 2.5;
  const delay = Math.random() * 0.1;
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight ref={light} position={[0, 5, 3]} intensity={1.25} />
      <group position={[shiftX, 0, 0]}>
        <Shape
          size={sizeBig}
          x={0}
          y={0}
          z={0}
          revealAnimation='major'
          color={mainColor}
          presenceAnimation='pulse'
          pulseColor='#ff1919'
        />
        <Shape
          size={sizeMedium}
          x={-0.5}
          y={-1}
          z={2}
          delay={delay}
          revealAnimation='major'
          color={theme?.primaryColor}
        />
        <Shape
          size={sizeSmall}
          x={-1}
          y={1}
          z={1}
          delay={delay}
          revealAnimation='major'
          color={theme?.primaryColor}
        />
        <Shape
          size={Math.floor(Math.random() * 50)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={theme?.secondaryColor}
        />
        <Shape
          size={Math.floor(Math.random() * 40)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={theme?.secondaryColor}
        />
        <Shape
          size={Math.floor(Math.random() * 30)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={theme?.secondaryColor}
        />
        <Shape
          size={Math.floor(Math.random() * 50)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={theme?.secondaryColor}
        />
        <Shape
          size={Math.floor(Math.random() * 40)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={theme?.secondaryColor}
        />
        <Shape
          size={Math.floor(Math.random() * 30)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={theme?.secondaryColor}
        />
      </group>
    </>
  );
};

export default Scene;
