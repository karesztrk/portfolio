import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Material, Mesh, Shader } from 'three';

interface ShapeProps {
  size: number;
  x: number;
  y: number;
  z: number;
  delay?: number;
  revealAnimation: 'major' | 'minor';
  presenceAnimation?: 'pulse';
  color?: string;
  pulseColor?: string;
}
const Shape: FC<ShapeProps> = ({
  size,
  x,
  y,
  z,
  delay,
  revealAnimation,
  presenceAnimation,
  color,
  pulseColor,
}) => {
  const mesh = useRef<Mesh>();
  const core = useRef<Mesh>();
  const material = useRef<Material>();

  const [revealFinished, setRevealFinished] = useState(false);

  const type = 'spring';

  const scaleX = useMotionValue(0.05);
  const scaleY = useMotionValue(0.05);
  const scaleZ = useMotionValue(0.05);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);

  const onBeforeCompile = useCallback((shader: Shader) => {
    shader.uniforms = {
      ...shader.uniforms,
      time: { value: 0 },
      displacement: { value: 0.05 },
      elevation: { value: 20 },
      elevationFilter: { value: 0.01 },
      speed: { value: 2 },
    };
    shader.vertexShader =
      `
      uniform float time;
      uniform float displacement;
      uniform float elevation;
      uniform float elevationFilter;
      uniform float speed;\n` + shader.vertexShader;

    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      [
        'float factor = abs(sin(time)) * displacement;',
        'vec3 offset = normal * factor;',
        'float waveY = abs(sin(position.y * elevation + time * speed)) * elevationFilter;',
        'vec3 transformed = vec3(position + waveY * offset);',
      ].join('\n'),
    );
    if (material.current) {
      material.current.userData.shader = shader;
    }
  }, []);

  useFrame(({ clock }) => {
    if (
      revealFinished &&
      presenceAnimation === 'pulse' &&
      material.current &&
      material.current.userData.shader
    ) {
      material.current.userData.shader.uniforms.time.value = clock.getElapsedTime();
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

    if (core.current && mesh.current && revealFinished) {
      core.current.scale.set(
        mesh.current.scale.x - 0.5,
        mesh.current.scale.y - 0.5,
        mesh.current.scale.z - 0.5,
      );

      core.current.rotation.set(
        mesh.current.rotation.x,
        mesh.current.rotation.y,
        mesh.current.rotation.z,
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
    <>
      <mesh ref={mesh} position={[x, y, z]}>
        <icosahedronBufferGeometry args={[0.04]} />
        <meshPhongMaterial
          ref={material}
          color={color}
          onBeforeCompile={onBeforeCompile}
        />
      </mesh>
      {presenceAnimation === 'pulse' && revealFinished && (
        <mesh ref={core} position={[x, y, z]}>
          <icosahedronBufferGeometry args={[0.04]} />
          <meshBasicMaterial color={pulseColor} />
        </mesh>
      )}
    </>
  );
};

export default Shape;
