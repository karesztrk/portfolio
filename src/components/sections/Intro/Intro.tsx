import React, { useEffect } from 'react';
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
import { Media, MediaContextProvider } from '../../common/Layout/Layout';
import { useAnimation, Variants } from 'framer-motion';

const microBoxVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    rotate: 10,
    scale: 1,
    transition: {
      delay: 1,
    },
  },
};

const minorBoxVariants = {
  initial: {
    transformPerspective: 0,
    scaleX: 0.05,
    scaleY: 0,
    rotateZ: 0,
  },
  phaseOne: {
    transformPerspective: 500,
    scaleX: 0.05,
    scaleY: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      delay: Math.random() * 0.25,
    },
  },
  phaseTwo: {
    scaleX: 1,
    transition: {
      type: 'spring',
      duration: 0.35,
    },
  },
  phaseThree: {
    rotateZ: 20,
    transition: {
      type: 'spring',
      duration: 0.7,
    },
  },
};

const majorBoxVariants = {
  initial: {
    transformPerspective: 0,
    scaleX: 0.05,
    scaleY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  },
  phaseOne: {
    transformPerspective: 500,
    scaleX: 0.05,
    scaleY: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  phaseTwo: {
    scaleX: 1,
    transition: {
      type: 'spring',
      duration: 0.35,
    },
  },
  phaseThree: {
    rotateX: 8,
    rotateY: -15,
    rotateZ: -1,
    transition: {
      type: 'spring',
      duration: 0.7,
    },
  },
};

const heroBoxOneVariants = microBoxVariants;

const heroBoxTwoVariants = {
  ...microBoxVariants,
  animate: {
    ...microBoxVariants.animate,
    rotate: microBoxVariants.animate.rotate * -1,
  },
};

const heroBoxThreeVariants = {
  ...microBoxVariants,
  animate: {
    ...microBoxVariants.animate,
    rotate: microBoxVariants.animate.rotate * 3,
  },
};

const heroBoxFourVariants = {
  ...microBoxVariants,
  animate: {
    ...microBoxVariants.animate,
    rotate: microBoxVariants.animate.rotate * -3,
  },
};

const heroBoxEightVariants = {
  ...microBoxVariants,
  animate: {
    ...microBoxVariants.animate,
    rotate: microBoxVariants.animate.rotate * -0.5,
  },
};

const heroBoxNineVariants = {
  ...microBoxVariants,
  animate: {
    ...microBoxVariants.animate,
    rotate: microBoxVariants.animate.rotate * -1.2,
  },
};

const heroBoxTenVariants = {
  ...microBoxVariants,
  animate: {
    ...microBoxVariants.animate,
    rotate: microBoxVariants.animate.rotate * -1.1,
  },
};

export const Intro = () => {
  const minorBox = useAnimation();
  const majorBox = useAnimation();
  const startIntroSequence = async () => {
    minorBox.start('phaseOne').then(() => {
      minorBox.start('phaseTwo').then(() => {
        minorBox.start('phaseThree');
      });
    });
    majorBox.start('phaseOne').then(() => {
      majorBox.start('phaseTwo').then(() => {
        majorBox.start('phaseThree');
      });
    });
  };

  useEffect(() => {
    startIntroSequence();
  }, []);

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
          <Media greaterThan='sm'>
            <HeroBoxWrapper>
              <svg
                className='placeholder'
                width='528'
                height='396'
                viewBox='0 0 528 396'
              >
                <rect
                  width='528'
                  height='396'
                  style={{ fill: 'transparent' }}
                />
              </svg>
              <HeroBoxOne
                initial='initial'
                animate='animate'
                variants={heroBoxOneVariants}
              />
              <HeroBoxTwo
                initial='initial'
                animate='animate'
                variants={heroBoxTwoVariants}
              />
              <HeroBoxThree
                initial='initial'
                animate='animate'
                variants={heroBoxThreeVariants}
              />
              <HeroBoxFour
                initial='initial'
                animate='animate'
                variants={heroBoxFourVariants}
              />
              <HeroBoxFive
                initial='initial'
                variants={majorBoxVariants}
                animate={majorBox}
              />
              <HeroBoxSix
                initial='initial'
                variants={minorBoxVariants}
                animate={minorBox}
              />
              <HeroBoxSeven
                initial='initial'
                variants={minorBoxVariants}
                animate={minorBox}
              />
              <HeroBoxEight
                initial='initial'
                animate='animate'
                variants={heroBoxEightVariants}
              />
              <HeroBoxNine
                initial='initial'
                animate='animate'
                variants={heroBoxNineVariants}
              />
              <HeroBoxTen
                initial='initial'
                animate='animate'
                variants={heroBoxTenVariants}
              />
            </HeroBoxWrapper>
          </Media>
        </IntroWrapper>
        <Separator id='intro' />
      </Wrapper>
    </MediaContextProvider>
  );
};
