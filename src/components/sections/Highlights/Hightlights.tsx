import React, { useEffect } from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Column, Details, Image, Wrapper } from './styles';
import skodaconnect from 'assets/pictures/skodaconnect.webp';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';
import useInViewAnimation from 'hooks/useInViewAnimation';

const imageMotion: Variants = {
  initial: {
    transformPerspective: 1000,
    opacity: 0,
    x: 100,
    y: 20,
  },
  show: {
    rotateX: 7,
    rotateY: 16,
    rotateZ: -2,
    scale: 0.95,
    transformPerspective: 1000,
    x: 0,
    y: 20,
    opacity: 1,
    transition: {
      duration: 1,
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

//
export const Highlights = () => {
  const { ref, animation } = useInViewAnimation();
  const { ref: imageRef, animation: imageAnimation } = useInViewAnimation(0.5);
  return (
    <Wrapper ref={ref} as={Container} id='highlights'>
      <SectionHeader initial='hidden' animate={animation} variants={header}>
        <h2>Highlights</h2>
        <Divider />
      </SectionHeader>
      <Details>
        <Column>
          <Image
            ref={imageRef}
            initial='initial'
            animate={imageAnimation}
            variants={imageMotion}
            alt='Skoda Connect'
            src={skodaconnect}
          />
        </Column>
        <Column initial='hidden' animate={animation} variants={rightSide}>
          <p>
            Škoda-Connect is a highly interactive Single Page Application that
            gives you the ease of remote vehicle management. Through this web
            application the users are able to check vehicle status, health or
            even plan trips ahead. Škoda vehicle monitoring through a
            web-browser have never been easier before.
          </p>
          <p>
            By being a full-stack developer for the first time, I really enjoyed
            the technical challanges that the project gave to me. Day by day,
            I've got familiar with the top Front-end technologies and soon I've
            become a passionate Java Script developer. This excitement has not
            faded since then .
          </p>
          <p>
            In this team I learned how professional software if getting
            released.
          </p>
        </Column>
      </Details>
    </Wrapper>
  );
};
