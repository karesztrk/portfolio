import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';

interface MiniShapeProps {
  size: number;
  x: number;
  y: number;
  z: number;
  delay?: number;
  geometry: BufferGeometry;
  material: Material;
  onRevealFinished?: () => void;
}

const MiniShape: FC<MiniShapeProps> = ({
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

  const scaleX = useMotionValue(0.05);
  const scaleY = useMotionValue(0.05);
  const scaleZ = useMotionValue(0.05);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
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
      if (
        rotateX.isAnimating() ||
        rotateY.isAnimating() ||
        rotateZ.isAnimating()
      ) {
        mesh.current.rotation.set(rotateX.get(), rotateY.get(), rotateZ.get());
      }
    }
  });

  useEffect(() => {
    const type = 'spring';
    const rotateXTo = Math.random() - Math.PI * 0.25;
    const rotateYTo = Math.PI * 0.25;
    const rotateZTo = Math.random() - Math.PI * 0.25;

    const onCompleteZ = () => {
      animate(rotateX, rotateXTo, {
        type,
      });
      animate(rotateY, rotateYTo, {
        type,
      });
      animate(rotateZ, rotateZTo, {
        type,
        onComplete: () => {
          if (onRevealFinished) {
            onRevealFinished();
          }
        },
      });
    };

    const onCompleteY = () => {
      animate(scaleZ, size, {
        type,
        duration: 0.5,
        onComplete: onCompleteZ,
      });
    };

    const onCompleteX = () =>
      animate(scaleY, size, {
        type,
        duration: 0.5,
        onComplete: onCompleteY,
      });

    const control = animate(scaleX, size, {
      type,
      duration: 0.5,
      delay,
      onComplete: onCompleteX,
    });

    return control.stop;
  }, []);

  return (
    <group ref={mesh} position={[x, y, z]}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
};

export default MiniShape;
