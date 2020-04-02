import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header, Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h4>Károly Török</h4>
        <h1>Bringing your ideas to life</h1>
        <p>Experienced full-stack web developer</p>
        <Button as={AnchorLink} href="#about">
          Learn more
        </Button>
      </Details>
    </IntroWrapper>
  </Wrapper>
);
