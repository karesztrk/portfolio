import React, { FC } from 'react';
import HeroShapes from './HeroShapes';

interface SceneProps {}

const Scene: FC<SceneProps> = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[0, 5, 3]} intensity={1.25} />
    <HeroShapes />
  </>
);

export default Scene;
