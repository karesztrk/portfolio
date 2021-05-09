import React, { FC, useRef } from 'react';
import ShapeGroup from './Shapes/ShapeGroup';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree } from '@react-three/fiber';
import { DirectionalLight } from 'three';

extend({ OrbitControls });

interface SceneProps {
  helpers?: boolean;
}

const Scene: FC<SceneProps> = ({ helpers }) => {
  const light = useRef<DirectionalLight>();
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight ref={light} position={[0, 5, 3]} intensity={1.25} />
      <ShapeGroup />
      {helpers && <orbitControls args={[camera, domElement]} />}
      {helpers && light.current && (
        <directionalLightHelper args={[light.current, 5]} />
      )}
    </>
  );
};

export default Scene;
