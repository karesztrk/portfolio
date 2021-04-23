import { Canvas } from '@react-three/fiber';
import { Container, Header, SocialLinksMenu } from 'components/common';
import { useAnimation } from 'framer-motion';
import React, { Suspense, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Media, MediaContextProvider } from '../../common/Layout/Layout';
import Scene from './Scene';
import { Details, Divider, IntroWrapper, Separator, Wrapper } from './styles';

export const Intro = () => {
  const theme = useContext(ThemeContext);
  const shiftX = 3;
  return (
    <MediaContextProvider>
      <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details>
            <h4>Károly Török</h4>
            <h1>Bringing your ideas to life</h1>
            <p>Experienced full-stack web developer</p>
            <Divider />
            <SocialLinksMenu />
          </Details>
          <Media greaterThan='sm'>
            <Canvas
              camera={{ fov: 60, near: 0.1, far: 10, position: [shiftX, 0, 5] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <Suspense fallback='Loading..'>
                <Scene theme={theme} shiftX={shiftX} />
              </Suspense>
            </Canvas>
          </Media>
        </IntroWrapper>
        <Separator id='intro' />
      </Wrapper>
    </MediaContextProvider>
  );
};
