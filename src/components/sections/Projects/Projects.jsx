import React from 'react';
import { Container, SectionHeader, Divider, Separator } from 'components/common';
import { Wrapper, Grid } from './styles';
import projects from './projects.json';
import { ProjectItem } from './ProjectItem';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <SectionHeader>
      <h2>Projects</h2>
      <Divider />
    </SectionHeader>
    <Grid>
      {projects.map((project, index) => (
        <ProjectItem key={project.title} project={project} guide={index === 0} />
      ))}
    </Grid>
    <Separator variant="dark" />
  </Wrapper>
);
