import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue, useViewportScroll } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
import { Mesh } from 'three';

interface BoxProps {
  size: number;
  x: number;
  y: number;
  z: number;
  delay?: number;
  revealAnimation: 'major' | 'minor';
  color?: string;
}

const Box: FC<BoxProps> = ({
  size,
  x,
  y,
  z,
  delay,
  revealAnimation,
  color,
}) => {
  const mesh = useRef<Mesh>();
  const scroll = useViewportScroll();
  const type = 'spring';
  const scaleX = useMotionValue(0.05);
  const scaleY = useMotionValue(0.05);
  const scaleZ = useMotionValue(0.05);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.scale.set(scaleX.get(), scaleY.get(), scaleZ.get());
      mesh.current.rotation.set(
        rotateX.get() + scroll.scrollYProgress.get() * 5,
        rotateY.get(),
        rotateZ.get(),
      );
    }
  });
  useEffect(() => {
    let control;
    if (revealAnimation === 'major') {
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

      control = animate(scaleX, size, {
        type,
        duration: 0.5,
        delay,
        onComplete: onCompleteX,
      });
    } else {
      const rotateZTo = Math.random() * 2;
      control = animate(scaleX, size, {
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
    }

    return control.stop;
  }, []);
  return (
    <mesh ref={mesh} position={[x, y, z]}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
};

export default Box;
