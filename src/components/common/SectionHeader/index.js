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

    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 3rem;

      @media (max-width: 960px) {
        font-size: 2rem;
      }
    }

    @media (max-width: 960px) {
      justify-content: space-between;
    }
  `,
  <Slide left />
);
