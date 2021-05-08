import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';

interface ShapeProps {
  size: number;
  x: number;
  y: number;
  z: number;
  delay?: number;
  revealAnimation: 'major' | 'minor';
  presenceAnimation?: 'pulse';
  color?: string;
  coreColor?: string;
  geometry: BufferGeometry;
  material: Material;
}

const Shape: FC<ShapeProps> = ({
  size,
  x,
  y,
  z,
  delay,
  revealAnimation,
  presenceAnimation,
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
    if (
      revealFinished &&
      presenceAnimation === 'pulse' &&
      material &&
      material.userData.shader
    ) {
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
      setRevealFinished(true);
    }

    return control.stop;
  }, []);

  return (
    <group ref={mesh} position={[x, y, z]}>
      <mesh geometry={geometry} material={material} />
      {presenceAnimation === 'pulse' && (
        <mesh ref={core}>
          <icosahedronBufferGeometry args={[0.039]} />
          <meshBasicMaterial color={coreColor} />
        </mesh>
      )}
    </group>
  );
};

export default Shape;
