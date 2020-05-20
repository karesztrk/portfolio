import React from 'react';
import styled, { css } from 'styled-components';
import header from 'assets/illustrations/article-header.inline.svg';
import footer from 'assets/illustrations/article-footer.inline.svg';
import { animated } from 'react-spring';

export const Wrapper = styled.section`
  color: #ffffff;
`;

const gridCounter = ({ theme }) => css`
  @media (max-width: ${theme.breakpoints.sm - 1}px) {
    --amount: 2;
  }

  @media (min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme.breakpoints.md - 1}px) {
    --amount: 3;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    --amount: 5;
  }

  --counter: 1;
`;

const columns = amount => {
  let style = '';
  for (let i = 1; i <= amount; i += 1) {
    style += `
      &:nth-of-type(${amount}n + ${i}) {
        grid-column: ${i + i - 1} / span 3;
        ${i % 2 === 0 ? 'grid-row: calc(var(--counter) + var(--counter) - 1) / span 2;' : ''}
      }
    `;
  }
  return css`
    ${style}
  `;
};

const rows = amount => {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) and (max-width: ${({ theme }) =>
      theme.breakpoints.md - 1}px) {
    ${columns(3)}
    ${rows(3)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${columns(5)}
    ${rows(5)}
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease 0s;
  }
`);

export const ProjectContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 1rem;
`;

export const Header = styled.h4`
  max-width: 60%;
  font-size: 1rem;
  text-align: center;

  ${({ theme }) => theme.sm`
      font-size: 1.5rem;
  `}
`;

export const Time = styled.time`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.quaternaryColor};
  font-weight: bold;

  div {
    position: relative;
    z-index: 0;
    padding: 0.75rem 1.5rem;
  }
`;

export const HeaderImage = styled(header)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Footer = styled.ul`
  margin: 0;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  font-weight: 300;
  list-style: square;
  max-width: 80%;
  text-align: center;

  ${({ theme }) => theme.sm`
      font-size: 1rem;
  `}

  li {
    padding-right: 0.5rem;
    margin: 0;
  }
`;

export const FooterImage = styled(footer)`
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.primaryColor};
`;
