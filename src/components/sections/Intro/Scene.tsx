import React, { FC } from 'react';
import ShapeGroup from './Shapes/ShapeGroup';

interface SceneProps {}

const Scene: FC<SceneProps> = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[0, 5, 3]} intensity={1.25} />
    <ShapeGroup />
  </>
);

export default Scene;
