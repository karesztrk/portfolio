import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-reveal';
import withReveal from 'react-reveal/withReveal';

export const SectionHeader = withReveal(
  styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.45rem;
    width: 100%;
    justify-content: space-between;

    ${({ theme }) => theme.md`
      justify-content: flex-start;
    `}

    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 2rem;

      ${({ theme }) => theme.md`
        font-size: 3rem;
      `}
    }
  `,
  <Slide left />
);