import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-reveal';
import withReveal from 'react-reveal/withReveal';

export const Wrapper = styled.section`
  color: #ffffff;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}
`;

export const Content = styled.div`
  line-height: 2rem;
  font-size: 1rem;

  h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  ${({ theme }) => theme.md`
    font-size: 1.2rem;
    line-height: 2.2rem;
  `}

  a {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Details = withReveal(
  styled.div`
    padding: 0;

    ${({ theme }) => theme.md`
      padding: 0 2rem;
    `}
  `,
  <Slide bottom />
);
