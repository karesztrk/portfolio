import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';

interface BackgroundShapeProps {
  size: number;
  x: number;
  y: number;
  z: number;
  delay?: number;
  geometry: BufferGeometry;
  material: Material;
  onRevealFinished?: () => void;
}

const BackgroundShape: FC<BackgroundShapeProps> = ({
  size,
  x,
  y,
  z,
  delay,
  geometry,
  material,
  onRevealFinished,
}) => {
  const mesh = useRef<Mesh>();

  const type = 'spring';

  const scaleX = useMotionValue(0.05);
  const scaleY = useMotionValue(0.05);
  const scaleZ = useMotionValue(0.05);
  const rotateZ = useMotionValue(0);

  useFrame(() => {
    if (mesh.current) {
      if (
        scaleX.isAnimating() ||
        scaleY.isAnimating() ||
        scaleZ.isAnimating()
      ) {
        mesh.current.scale.set(scaleX.get(), scaleY.get(), scaleZ.get());
      }
      if (rotateZ.isAnimating()) {
        mesh.current.rotation.set(0, 0, rotateZ.get());
      }
    }
  });

  useEffect(() => {
    const rotateZTo = Math.random() * 2;
    const control = animate(scaleX, size, {
      type,
      duration: 0.5,
      delay,
    });
    animate(scaleY, size, {
      type,
      duration: 0.5,
      delay,
    });
    animate(scaleZ, size, {
      type,
      delay,
    });
    animate(rotateZ, rotateZTo, {
      type,
      delay,
    });
    if (onRevealFinished) {
      onRevealFinished();
    }
    return control.stop;
  }, []);

  return (
    <group ref={mesh} position={[x, y, z]}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
};

export default BackgroundShape;
