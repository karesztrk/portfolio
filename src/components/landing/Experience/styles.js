import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-reveal';
import withReveal from 'react-reveal/withReveal';

export const Wrapper = styled.section`
  padding: 12rem 0;
  color: #ffffff;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  line-height: 2.2rem;
  font-size: 1.2rem;

  h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  @media (max-width: 960px) {
    font-size: 1rem;
  }

  a {
    color: #a7ff83;
  }
`;

export const Details = withReveal(styled.div``, <Slide bottom />);
