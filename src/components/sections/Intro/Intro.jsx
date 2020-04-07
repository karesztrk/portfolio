import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header, Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Separator } from './styles';

export const Intro = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const pos = window.pageYOffset * -0.5;
      setScroll(pos);
    });
  }, []);
  return (
    <Wrapper scroll={scroll}>
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
      <Separator />
    </Wrapper>
  );
};
