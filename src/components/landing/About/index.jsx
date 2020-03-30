import React from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Wrapper, Details, Column, PhotoFrame } from './styles';

export const About = () => (
  <Wrapper as={Container} id="about">
    <SectionHeader>
      <h2>About</h2>
      <Divider />
    </SectionHeader>
    <Details>
      <Column>
        Hey, this is Károly. I am a Software developer since 2009. I've started building applications at University of
        of Szeged before my graduation. During that time we were using Server Faces technology to deliver content and
        functionality. Because of that I always considered myself as a Backend developer. And Java became my primary
        programming language. But as the trend changes, so I adapt. Building pixel perfect, dynamic and extreme fast
        applications because my obsession. I enjoy creating new stuff and embrace all the challenges they require.
      </Column>
      <Column>
        <PhotoFrame />
      </Column>
    </Details>
  </Wrapper>
);
