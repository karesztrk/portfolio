import React, { useEffect } from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Column, Details, Wrapper } from './styles';
import skodaconnect from 'assets/pictures/skodaconnect.webp';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';

const imageMotion: Variants = {
  initial: {
    transformPerspective: 1000,
    opacity: 0,
    translateX: '2%',
    translateY: '2%',
  },
  reveal: {
    rotateX: 7,
    rotateY: 16,
    rotateZ: -2,
    scale: 0.95,
    transformPerspective: 1000,
    translateY: '2%',
    opacity: 1,
  },
};

//
export const Highlights = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start('reveal');
    }
  }, [inView]);
  return (
    <Wrapper as={Container} id='highlights'>
      <SectionHeader>
        <h2>Highlights</h2>
        <Divider />
      </SectionHeader>
      <Details>
        <Column>
          <motion.img
            ref={ref}
            initial={'initial'}
            animate={animation}
            variants={imageMotion}
            alt='Skoda Connect'
            src={skodaconnect}
          />
        </Column>
        <Column>
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
        </Column>
      </Details>
    </Wrapper>
  );
};
