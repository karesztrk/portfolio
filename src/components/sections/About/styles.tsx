import React from 'react';
import styled from 'styled-components';
import me from 'assets/pictures/me.webp';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  color: #ffffff;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}
`;

export const Column = styled(motion.div)`
  flex: 1;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: justify;
  line-height: 2rem;

  a {
    color: ${({ theme }) => theme.primaryColor};
  }

  ${({ theme }) => theme.md`
    font-size: 1.5rem;
    line-height: 2.2rem;
    text-align: left;
  `}
`;

export const PhotoFrame = styled(motion.div)`
  position: relative;
  width: 225px;
  height: 280px;
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.primaryColor};
  box-shadow: 0px 5px 15px rgb(0, 0, 0);
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: 225px;
    height: 280px;
    display: block;
    background-image: url(${me});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.25s ease 0s;
    transform: translate(-10px, -10px);
  }

  &:hover {
    &:before {
      transform: translate(0px, 0px);
    }
  }
`;

export const TechContainer = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  list-style: none;
  margin: 0;

  * {
    color: inherit;
    background: transparent;
    margin: 0.5rem 1rem 0.5rem 0;
    font-family: ${({ theme }) => theme.secondaryFont};
    font-weight: 300;
    box-shadow: inset 0 -4px 0 ${({ theme }) => theme.secondaryColor};
    transition: box-shadow 0.25s ease 0s;

    &:hover {
      box-shadow: inset 0 -2.5rem 0 ${({ theme }) => theme.secondaryColor};
    }
  }
`;
