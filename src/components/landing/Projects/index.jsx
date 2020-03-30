import React from 'react';
import { Container, SectionHeader, Divider } from 'components/common';
import { Wrapper, Grid, GridItem } from './styles';

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <SectionHeader>
        <h2>Projects</h2>
        <Divider />
      </SectionHeader>
      <Grid>
        <GridItem>
          <header>
            <div>2020</div>
            <h4>Project 3</h4>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <footer>
            <ul>
              <li>Tech one</li>
              <li>Tech two</li>
            </ul>
            <div>Project type</div>
          </footer>
        </GridItem>
        <GridItem>
          <header>
            <div>2019</div>
            <h4>Project 2</h4>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <footer>
            <ul>
              <li>Tech three</li>
              <li>Tech two</li>
            </ul>
            <div>Smething</div>
          </footer>
        </GridItem>
        <GridItem>
          <header>
            <div>2018</div>
            <h4>Project 1</h4>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <footer>
            <ul>
              <li>Tech three</li>
              <li>Tech one</li>
            </ul>
            <div>Anything</div>
          </footer>
        </GridItem>
      </Grid>
    </Wrapper>
  );
};
