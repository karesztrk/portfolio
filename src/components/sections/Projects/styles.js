import React from 'react';
import styled from 'styled-components';
import header from 'assets/illustrations/article-header.inline.svg';
import footer from 'assets/illustrations/article-footer.inline.svg';
import { Slide } from 'react-reveal';
import withReveal from 'react-reveal/withReveal';

export const Wrapper = styled.section`
  color: #ffffff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

export const GridItem = withReveal(
  styled.article`
    background: linear-gradient(180deg, ${({ theme }) => `${theme.tertiaryColor} 0%, ${theme.quaternaryColor} 100%`});
    box-shadow: 0px 2px 5px rgba(167, 255, 131, 0.2);
    padding: 3.5rem 1.5rem;
    position: relative;
    transition: all 0.25s ease 0s;

    &:hover {
      transform: translate(0, -10px);
      box-shadow: 0px 10px 30px ${({ theme }) => theme.primaryColor};
    }
  `,
  <Slide bottom />
);

export const Description = styled.p`
  font-size: 1rem;
`;

export const Header = styled.header`
  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
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

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    max-width: 50%;
    margin: 0.5rem 0 0.5rem 1.5rem;
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;

    li {
      display: inline;
      padding-right: 0.5rem;
      margin: 0;
    }
  }

  div {
    position: relative;
    z-index: 0;
    font-size: 1.2rem;
    text-align: right;
    color: ${({ theme }) => theme.quaternaryColor};
    font-weight: bold;
    padding: 0.75rem 1.5rem;
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
