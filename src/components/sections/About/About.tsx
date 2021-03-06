import React from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Slide } from 'react-reveal';
import { Wrapper, Details, Column, PhotoFrame, TechContainer } from './styles';

export const About = () => (
  <Wrapper as={Container} id='about'>
    <SectionHeader>
      <h2>Story</h2>
      <Divider />
    </SectionHeader>
    <Details>
      <Column>
        <Slide left>
          <p>
            Hey, this is Károly <span>👋</span> I live in{' '}
            <a href='https://goo.gl/maps/iS7ynsLC4MXW1kZJ8'>Szeged</a>, Hungary.
            And I am a Software Developer since 2009.
          </p>
          <p>
            I've finished my study at the University of Szeged. I've started to
            work here very soon. During that time we were using Server Faces
            technology to deliver content and functionality. Because of that I
            always considered myself as a Backend developer. And Java became my
            primary programming language. But as the trend changes, so I adapt.
            Building pixel perfect, dynamic and extreme fast applications
            because my obsession. HTML + CSS + JS =&nbsp;<span>🤟</span>. I
            enjoy creating new stuff and embrace all the challenges they
            require.
          </p>
          <p>
            In my free time, I usually obeying to my second obsession: Fitness{' '}
            <span>🏃‍🏋️🏊‍</span>. During my entire life there was something my
            mind which was telling me: move out and become better. Probably this
            is also the reason why I am eager to learn.
          </p>
          <p>Technologies and languages that I'm actively using:</p>
          <TechContainer>
            <mark>HTML</mark>
            <mark>CSS</mark>
            <mark>JavaScript</mark>
            <mark>React</mark>
            <mark>CSS</mark>
            <mark>Java</mark>
            <mark>Spring</mark>
            <mark>OpenAPI</mark>
          </TechContainer>
        </Slide>
      </Column>
      <Column>
        <PhotoFrame />
      </Column>
    </Details>
  </Wrapper>
);
