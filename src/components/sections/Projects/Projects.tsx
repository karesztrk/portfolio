import React, { useContext, useState } from 'react';
import { Container, SectionHeader, Divider } from 'components/common';
import { Wrapper, Grid } from './styles';
import projects from './data.json';
import { ProjectItem } from './ProjectItem';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectImage } from '../Highlights/Hightlights';
import ProjectPopup from './ProjectPopup';

export const Projects = () => {
  const [selected, setSelected] = useState<string>();
  const onItemClick = (id: string) => {
    if (!selected) {
      setSelected(id);
    }
  };
  const selectedProject =
    projects && projects.find((project) => project.id === selected);

  return (
    <Wrapper as={Container} id='projects'>
      <SectionHeader>
        <h2>Projects</h2>
        <Divider />
      </SectionHeader>
      <Grid layout>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.title}
            project={project}
            guide={index === 0}
            onItemClick={onItemClick}
          />
        ))}
      </Grid>
      <>
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            onClick={() => setSelected(undefined)}
          />
        )}
      </>
    </Wrapper>
  );
};
