import React, { FC, useContext, useMemo } from 'react';
import {
  Color,
  IcosahedronBufferGeometry,
  MeshPhongMaterial,
  Shader,
} from 'three';
import { BridgeContext } from './Bridge';
import Shape from './Shape';

const Shapes: FC = () => {
  const shiftX = 3;
  const sizeBig = Math.floor(Math.random() * 5) + 40;
  const sizeMedium = Math.floor(Math.random() * 5) + 5;
  const sizeSmall = Math.floor(Math.random() * 5) + 2.5;
  const delay = Math.random() * 0.1;

  const { theme } = useContext(BridgeContext);
  const geometry = useMemo(() => new IcosahedronBufferGeometry(0.04), []);
  const backgroundMaterial = useMemo(
    () =>
      new MeshPhongMaterial({
        color: new Color(theme?.secondaryColor).convertSRGBToLinear(),
      }),
    [theme?.secondaryColor],
  );

  const miniMaterial = useMemo(
    () =>
      new MeshPhongMaterial({
        color: new Color(theme?.primaryColor).convertSRGBToLinear(),
      }),
    [theme?.primaryColor],
  );
  const heroMaterial = useMemo(() => {
    const heroColor = '#242830';
    const material = new MeshPhongMaterial({
      color: new Color(heroColor).convertSRGBToLinear(),
    });
    material.onBeforeCompile = (shader: Shader) => {
      shader.uniforms = {
        ...shader.uniforms,
        time: { value: 0 },
      };
      shader.vertexShader =
        `
          #define displacement 0.05
          #define elevation 20.0
          #define elevationFilter 0.01
          #define speed 2.0
          uniform float time;\n
        ` + shader.vertexShader;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
          float factor = abs(sin(time)) * displacement;
          vec3 offset = normal * factor;
          float waveY = abs(sin(position.y * elevation + time * speed)) * elevationFilter;
          vec3 transformed = vec3(position + waveY * offset);
        `,
      );
      if (material) {
        material.userData.shader = shader;
      }
    };
    return material;
  }, [theme?.primaryColor]);
  const backgroundShapes = useMemo(() => {
    return Array.from(Array(6).keys()).map((i) => {
      const x = Math.random() * -5;
      const y = Math.random() * 2 * (Math.random() < 0.5 ? 1 : -1);
      const z = Math.random() * (i % 2 === 0 ? -5 : -3);
      const size = Math.floor(Math.random() * 30);
      const delay = 1.75;
      const revealAnimation: 'minor' | 'major' = 'minor';
      return {
        x,
        y,
        z,
        delay,
        size,
        revealAnimation,
      };
    });
  }, []);
  return (
    <group position={[shiftX, 0, 0]}>
      <Shape
        size={sizeBig}
        x={0}
        y={0}
        z={0}
        revealAnimation='major'
        presenceAnimation='pulse'
        coreColor='#ff1919'
        geometry={geometry}
        material={heroMaterial}
      />
      <Shape
        size={sizeMedium}
        x={-0.5}
        y={-1}
        z={2}
        delay={delay}
        revealAnimation='major'
        geometry={geometry}
        material={miniMaterial}
      />
      <Shape
        size={sizeSmall}
        x={-1}
        y={1}
        z={1}
        delay={delay}
        revealAnimation='major'
        geometry={geometry}
        material={miniMaterial}
      />
      {backgroundShapes.map((shape) => (
        <Shape
          size={shape.size}
          x={shape.x}
          y={shape.y}
          z={shape.z}
          delay={shape.delay}
          revealAnimation={shape.revealAnimation}
          geometry={geometry}
          material={backgroundMaterial}
        />
      ))}
    </group>
  );
};

export default Shapes;
