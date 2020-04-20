import React from 'react';
import { Header, Container, SocialLinksMenu } from 'components/common';
import { Wrapper, IntroWrapper, Details, Separator, Divider } from './styles';

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
    </IntroWrapper>
    <Separator />
  </Wrapper>
);
