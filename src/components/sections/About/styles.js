import React from 'react';
import styled from 'styled-components';
import me from 'assets/pictures/me.jpg';
import { Slide } from 'react-reveal';
import withReveal from 'react-reveal/withReveal';

export const Wrapper = styled.section`
  padding: 12rem 0;
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

export const Column = styled.div`
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

export const PhotoFrame = withReveal(
  styled.div`
    position: relative;
    width: 225px;
    height: 280px;
    margin: 0 auto;
    background: ${({ theme }) => theme.primaryColor};
    box-shadow: 0px 10px 30px rgb(0, 0, 0);

    &:before {
      content: '';
      position: absolute;
      width: 225px;
      height: 280px;
      display: block;
      background-image: url(${me});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: all 0.25s ease 0s;
    }

    &:hover {
      &:before {
        transform: translate(-10px, -10px);
      }
    }
  `,
  <Slide right />
);

export const TechContainer = styled.ul`
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
    box-shadow: inset 0 -4px 0 ${({ theme }) => theme.tertiaryColor};
    transition: box-shadow 0.25s ease 0s;

    &:hover {
      box-shadow: inset 0 -2.5rem 0 ${({ theme }) => theme.tertiaryColor};
    }
  }
`;
