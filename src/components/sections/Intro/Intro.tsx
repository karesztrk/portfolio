import React from 'react';
import { Header, Container, SocialLinksMenu } from 'components/common';
import { useTransition } from 'react-spring';
import {
  Wrapper,
  IntroWrapper,
  Details,
  Separator,
  Divider,
  HeroBoxWrapper,
  HeroBoxOne,
  HeroBoxTwo,
  HeroBoxThree,
  HeroBoxFour,
  HeroBoxFive,
  HeroBoxSix,
  HeroBoxSeven,
  HeroBoxEight,
  HeroBoxNine,
  HeroBoxTen,
} from './styles';
import { Media, MediaContextProvider } from '../../common/Layout/Layout'

export const Intro = () => {
  const config = { mass: 1, tension: 450, friction: 30 };
  const majorBoxTransition = useTransition(true, null, {
    initial: { transform: 'perspective(0px) scaleX(0.05) scaleY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
    enter: [
      { transform: 'perspective(500px) scaleX(0.05) scaleY(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
      { transform: 'perspective(500px) scaleX(1) scaleY(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
      { transform: 'perspective(500px) scaleX(1) scaleY(1) rotateX(8deg) rotateY(-15deg) rotateZ(-1deg)' },
    ],
    config,
  });

  const minorBoxTransition = useTransition(true, null, {
    initial: { transform: 'perspective(0px) scaleX(0.05) scaleY(0) rotateZ(0deg)' },
    enter: [
      { transform: 'perspective(500px) scaleX(0.05) scaleY(1) rotateZ(0deg)' },
      { transform: 'perspective(500px) scaleX(1) scaleY(1) rotateZ(0deg)' },
      { transform: 'perspective(500px) scaleX(1) scaleY(1) rotateZ(20deg)' },
    ],
    config,
  });

  const microBoxTransition = useTransition(true, null, {
    from: () => ({ opacity: 0, transform: [0, 0.7] }),
    enter: () => ({ opacity: 1, transform: [10, 1] }),
    config,
  });
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
        <Media greaterThan="sm">
          <HeroBoxWrapper>
          <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
            <rect width="528" height="396" style={{ fill: 'transparent' }} />
          </svg>
          {microBoxTransition.map(({ key, props: { transform, ...rest } }) => (
            <React.Fragment key={`box-micro-one-${key}`}>
              <HeroBoxOne
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate * 1}deg) scale(${scale})`),
                  ...rest,
                }}
              />
              <HeroBoxTwo
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate * -1}deg) scale(${scale})`),
                  ...rest,
                }}
              />
              <HeroBoxThree
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate}deg) scale(${scale})`),
                  ...rest,
                }}
              />
              <HeroBoxFour
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate * -3}deg) scale(${scale})`),
                  ...rest,
                }}
              />
            </React.Fragment>
          ))}
          {majorBoxTransition.map(({ key, props }) => (
            <HeroBoxFive key={`box-five-${key}`} style={props} />
          ))}
          {minorBoxTransition.map(({ key, props }) => (
            <React.Fragment key={`box-minor-${key}`}>
              <HeroBoxSix style={props} />
              <HeroBoxSeven style={props} />
            </React.Fragment>
          ))}
          {microBoxTransition.map(({ key, props: { transform, ...rest } }) => (
            <React.Fragment key={`box-micro-two-${key}`}>
              <HeroBoxEight
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate * -0.5}deg) scale(${scale})`),
                  ...rest,
                }}
              />
              <HeroBoxNine
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate * -1.2}deg) scale(${scale})`),
                  ...rest,
                }}
              />
              <HeroBoxTen
                style={{
                  transform: transform.interpolate((rotate, scale) => `rotate(${rotate * -1.1}deg) scale(${scale})`),
                  ...rest,
                }}
              />
            </React.Fragment>
          ))}
        </HeroBoxWrapper>
        </Media>
      </IntroWrapper>
      <Separator id="intro" />
    </Wrapper>
    </MediaContextProvider>
  );
};
