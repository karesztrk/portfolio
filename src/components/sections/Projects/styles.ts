import React from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { animated } from 'react-spring';
import { Theme } from 'components/common/Layout/Layout';

export const Wrapper = styled.section`
  color: #ffffff;
`;

const gridCounter = ({ theme }: ThemeProps<Theme>) => css`
  @media (max-width: ${theme.breakpoints.sm - 1}px) {
    --amount: 2;
  }

  @media (min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme
      .breakpoints.md - 1}px) {
    --amount: 3;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    --amount: 5;
  }

  --counter: 1;
`;

const columns = (amount: number) => {
  let style = '';
  for (let i = 1; i <= amount; i += 1) {
    style += `
      &:nth-of-type(${amount}n + ${i}) {
        grid-column: ${i + i - 1} / span 3;
        ${
          i % 2 === 0
            ? 'grid-row: calc(var(--counter) + var(--counter) - 1) / span 2;'
            : ''
        }
      }
    `;
  }
  return css`
    ${style}
  `;
};

const rows = (amount: number) => {
  let style = '';
  for (let i = 1; i <= 20; i += 1) {
    style += `
      &:nth-of-type(n + ${i * amount + 1}) {
        --counter: ${i + 1};
      }
    `;
  }
  return css`
    ${style}
  `;
};

export const Grid = styled.div`
  ${gridCounter}
  display: grid;
  grid-template-columns: repeat(var(--amount), 1fr 2fr) 1fr;
  grid-gap: 1rem 2rem;
  margin: 0;
  padding: 0;
`;

export const GridItem = animated(styled.article`
  position: relative;
  grid-column: 1 / span 3;
  grid-row: calc(var(--counter) + var(--counter)) / span 2;
  height: 0;
  padding-bottom: 90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm - 1}px) {
    ${columns(2)}
    ${rows(2)}
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.sm}px) and (max-width: ${({ theme }) =>
      theme.breakpoints.md - 1}px) {
    ${columns(3)}
    ${rows(3)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${columns(5)}
    ${rows(5)}
  }
`);

export const GridContent = animated(styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease 0s;
    z-index: -1;
  }
`);

export const ProjectContent = styled.div`
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  .clickable {
    .pulse {
      fill-opacity: 0;
      transform-origin: 50% 50%;
      animation-duration: 2s;
      animation-name: pulse;
      animation-iteration-count: infinite;
    }

    @keyframes pulse {
      from {
        stroke-width: 3px;
        stroke-opacity: 1;
        transform: scale(0.3);
      }

      to {
        stroke-width: 0;
        stroke-opacity: 0;
        transform: scale(2);
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  max-width: 60%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const Header = styled.h4`
  max-width: 50%;
  font-size: 1rem;

  ${({ theme }) => theme.sm`
      font-size: 1.5rem;
  `}
`;

export const Time = styled.time`
  font-size: 1.2rem;
  letter-spacing: 0.25rem;
  font-family: ${({ theme }) => theme.secondaryFont};
`;

export const Footer = styled.ul`
  margin: 0;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  font-weight: 300;
  max-width: 80%;
  list-style: none;
  line-height: 1.2rem;
  letter-spacing: 0.25rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.sm`
      font-size: 1rem;
  `}

  li {
    padding-right: 0.5rem;
    padding: 0;
    margin: 0 1rem;
  }
`;
