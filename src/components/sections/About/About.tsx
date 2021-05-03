import React from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Wrapper, Details, Column, PhotoFrame, TechContainer } from './styles';
import { motion } from 'framer-motion';
import useInViewAnimation from 'hooks/useInViewAnimation';

const leftSide = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
      duration: 1,
    },
  },
};

const rightSide = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const header = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const About = () => {
  const { ref, animation } = useInViewAnimation();
  return (
    <Wrapper ref={ref} as={Container} id='about'>
      <SectionHeader initial='hidden' animate={animation} variants={header}>
        <h2>Story</h2>
        <Divider />
      </SectionHeader>
      <Details>
        <Column initial='hidden' animate={animation} variants={leftSide}>
          <motion.p variants={leftSide}>
            Hey, this is Károly <span>👋</span> I live in{' '}
            <a href='https://goo.gl/maps/iS7ynsLC4MXW1kZJ8'>Szeged</a>, Hungary.
            And I am a Software Developer since 2009.
          </motion.p>
          <motion.p variants={leftSide}>
            I've finished my study at the University of Szeged. I've started to
            work here very soon. During that time we were using Server Faces
            technology to deliver content and functionality. Because of that I
            always considered myself as a Backend developer. And Java became my
            primary programming language. But as the trend changes, so I adapt.
            Building pixel perfect, dynamic and extreme fast applications
            because my obsession. HTML + CSS + JS =&nbsp;<span>🤟</span>. I
            enjoy creating new stuff and embrace all the challenges they
            require.
          </motion.p>
          <motion.p variants={leftSide}>
            In my free time, I usually obeying to my second obsession: Fitness{' '}
            <span>🏃‍🏋️🏊‍</span>. During my entire life there was something my
            mind which was telling me: move out and become better. Probably this
            is also the reason why I am eager to learn.
          </motion.p>
          <motion.p variants={leftSide}>
            Technologies and languages that I'm actively using:
          </motion.p>
          <TechContainer variants={leftSide}>
            <mark>HTML</mark>
            <mark>CSS</mark>
            <mark>JavaScript</mark>
            <mark>React</mark>
            <mark>CSS</mark>
            <mark>Java</mark>
            <mark>Spring</mark>
            <mark>OpenAPI</mark>
            <mark>Three.js</mark>
          </TechContainer>
        </Column>
        <Column initial='hidden' animate={animation} variants={rightSide}>
          <PhotoFrame variants={rightSide} />
        </Column>
      </Details>
    </Wrapper>
  );
};
