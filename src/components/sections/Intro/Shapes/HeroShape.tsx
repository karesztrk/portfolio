import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';

interface HeroShapeProps {
  size: number;
  x: number;
  y: number;
  z: number;
  delay?: number;
  coreColor?: string;
  geometry: BufferGeometry;
  material: Material;
}

const HeroShape: FC<HeroShapeProps> = ({
  size,
  x,
  y,
  z,
  delay,
  coreColor,
  geometry,
  material,
}) => {
  const mesh = useRef<Mesh>();
  const core = useRef<Mesh>();

  const [revealFinished, setRevealFinished] = useState(false);

  const type = 'spring';

  const scaleX = useMotionValue(0.05);
  const scaleY = useMotionValue(0.05);
  const scaleZ = useMotionValue(0.05);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);

  useFrame(({ clock }) => {
    if (revealFinished && material && material.userData.shader) {
      material.userData.shader.uniforms.time.value = clock.getElapsedTime();
    }
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
          setRevealFinished(true);
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
      <mesh ref={core}>
        <icosahedronBufferGeometry args={[0.039]} />
        <meshBasicMaterial color={coreColor} />
      </mesh>
    </group>
  );
};

export default HeroShape;
