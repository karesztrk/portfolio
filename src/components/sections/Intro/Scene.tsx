import { Theme } from 'components/common/Layout/Layout';
import React, { FC, useRef } from 'react';
import { DirectionalLight } from 'three';
import Box from './Box';

interface SceneProps {
  theme: Theme;
  shiftX: number;
  mainBoxColor?: string;
}

const Scene: FC<SceneProps> = ({
  theme: { primaryColor, secondaryColor },
  shiftX,
  mainBoxColor = '#242830',
}) => {
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
        <Box
          size={sizeBig}
          x={0}
          y={0}
          z={0}
          revealAnimation='major'
          color={mainBoxColor}
        />
        <Box
          size={sizeMedium}
          x={-0.5}
          y={-1}
          z={2}
          delay={delay}
          revealAnimation='major'
          color={primaryColor}
        />
        <Box
          size={sizeSmall}
          x={-1}
          y={1}
          z={1}
          delay={delay}
          revealAnimation='major'
          color={primaryColor}
        />
        <Box
          size={Math.floor(Math.random() * 50)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={secondaryColor}
        />
        <Box
          size={Math.floor(Math.random() * 40)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={secondaryColor}
        />
        <Box
          size={Math.floor(Math.random() * 30)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={secondaryColor}
        />
        <Box
          size={Math.floor(Math.random() * 50)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={secondaryColor}
        />
        <Box
          size={Math.floor(Math.random() * 40)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={secondaryColor}
        />
        <Box
          size={Math.floor(Math.random() * 30)}
          x={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          y={Math.random() * 3 * (Math.random() < 0.5 ? 1 : -1)}
          z={-2}
          delay={1.5}
          revealAnimation='minor'
          color={secondaryColor}
        />
      </group>
    </>
  );
};

export default Scene;
