import React from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Wrapper } from './styles';
import styled from 'styled-components';
import skodaconnect from 'assets/pictures/skodaconnect.webp';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

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
  padding: 0 1rem;

  a {
    color: ${({ theme }) => theme.primaryColor};
  }

  ${({ theme }) => theme.md`
    font-size: 1.2rem;
    line-height: 2.2rem;
    text-align: left;
  `}
`;

export const ProjectImage = styled.img`
  transform: perspective(1000px) rotateY(16deg) rotateX(7deg) rotateZ(-2deg)
    scale(0.95) translatex(2%) translateY(-2%);
`;

//
export const Highlights = () => (
  <Wrapper as={Container} id='highlights'>
    <SectionHeader>
      <h2>Highlights</h2>
      <Divider />
    </SectionHeader>
    <Details>
      <Column>
        <ProjectImage alt='Skoda Connect' src={skodaconnect} />
      </Column>
      <Column>
        <p>
          Škoda-Connect is a highly interactive Single Page Application that
          gives you the ease of remote vehicle management. Through this web
          application the users are able to check vehicle status, health or even
          plan trips ahead. Škoda vehicle monitoring through a web-browser have
          never been easier before.
        </p>
        <p>
          By being a full-stack developer for the first time, I really enjoyed
          the technical challanges that the project gave to me. Day by day, I've
          got familiar with the top Front-end technologies and soon I've become
          a passionate Java Script developer. This excitement has not faded
          since then .
        </p>
      </Column>
    </Details>
  </Wrapper>
);
