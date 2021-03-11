import React, { useState } from 'react';
import { Container, SectionHeader, Divider } from 'components/common';
import { Wrapper, Grid } from './styles';
import projects from './data.json';
import { ProjectItem } from './ProjectItem';
import ProjectPopup from './ProjectPopup';
import useInViewAnimation from 'hooks/useInViewAnimation';

const header = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

const projectVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      ease: 'easeOut',
      duration: 1,
    },
  },
};

const projectItemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

export const Projects = () => {
  const { ref, animation } = useInViewAnimation();
  const [selected, setSelected] = useState<string>();
  const [showGuide, setShowGuide] = useState(true);
  const onItemClick = (id: string) => {
    if (!selected) {
      setSelected(id);
      setShowGuide(false);
    }
  };
  const selectedProject =
    projects && projects.find((project) => project.id === selected);

  return (
    <Wrapper ref={ref} as={Container} id='projects'>
      <SectionHeader initial='hidden' animate={animation} variants={header}>
        <h2>Projects</h2>
        <Divider />
      </SectionHeader>
      <Grid initial='hidden' animate={animation} variants={projectVariants}>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.title}
            project={project}
            guide={index === 0 && showGuide}
            onItemClick={onItemClick}
            variants={projectItemVariants}
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
