import React, { FC } from 'react';
import { Material } from 'three';

interface CoreProps {
  size: number;
  material: Material;
}

const Core: FC<CoreProps> = ({ size, material }) => {
  return (
    <mesh material={material}>
      <icosahedronBufferGeometry args={[size]} />
    </mesh>
  );
};

export default Core;
