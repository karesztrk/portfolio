import React from 'react';
import { Header, Container, SocialLinksMenu } from 'components/common';
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

export const Intro = () => (
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
      <HeroBoxWrapper>
        <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
          <rect width="528" height="396" style={{ fill: 'transparent' }} />
        </svg>
        <HeroBoxOne dataRotation="45deg" />
        <HeroBoxTwo dataRotation="-45deg" />
        <HeroBoxThree dataRotation="0deg" />
        <HeroBoxFour dataRotation="-135deg" />
        <HeroBoxFive />
        <HeroBoxSix />
        <HeroBoxSeven />
        <HeroBoxEight dataRotation="-22deg" />
        <HeroBoxNine dataRotation="-52deg" />
        <HeroBoxTen dataRotation="-50deg" />
      </HeroBoxWrapper>
    </IntroWrapper>
    <Separator />
  </Wrapper>
);
