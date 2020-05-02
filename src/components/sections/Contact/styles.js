import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  color: #ffffff;
  text-align: center;
  padding-bottom: 6rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 2rem;

  ${({ theme }) => theme.md`
    font-size: 3rem;
  `}
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem auto;
  max-width: 660px;
  line-height: 2rem;

  a {
    color: ${({ theme }) => theme.primaryColor};

    &:hover {
      box-shadow: 0 4px 0 ${({ theme }) => theme.primaryColor};
    }
  }
`;
