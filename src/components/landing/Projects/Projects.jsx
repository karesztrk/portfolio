import React from 'react';
import { Container, SectionHeader, Divider } from 'components/common';
import { Wrapper, Grid, GridItem, Header, Footer, Description, HeaderImage, Time, FooterImage } from './styles';
import projects from './projects.json';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <SectionHeader>
      <h2>Projects</h2>
      <Divider />
    </SectionHeader>
    <Grid>
      {projects.map(({ time, title, description, type, technologies }) => (
        <GridItem key={title}>
          <Header>
            <Time>
              <div>
                <HeaderImage />
                <span>{time}</span>
              </div>
            </Time>
            <h4>{title}</h4>
          </Header>
          <Description>{description}</Description>
          <Footer>
            <ul>
              {technologies.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
            <div>
              <FooterImage />
              <span>{type}</span>
            </div>
          </Footer>
        </GridItem>
      ))}
    </Grid>
  </Wrapper>
);
