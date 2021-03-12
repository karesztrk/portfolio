import React, { FC, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  GridItem,
  Header,
  ProjectContent,
  Technologies,
  GridContent,
} from './styles';
import { ProjectBackground } from './ProjectBackground';
import { Guide } from './Guide';

interface ProjectItemProps {
  project: {
    id: string;
    title: string;
    technologies: string[];
    time: number;
    description: string;
  };
  guide: boolean;
  onItemClick: (id: string) => void;
}

export const ProjectItem: FC<ProjectItemProps> = ({
  project,
  guide,
  onItemClick,
}) => {
  const { id, title, technologies } = project;
  const theme = useContext(ThemeContext);
  const {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    quaternaryColor,
  } = theme;
  const selectedColorScheme = {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    quaternaryColor,
  };
  return (
    <GridItem layoutId={id} onClick={() => onItemClick(id)}>
      <GridContent
        style={{
          transform: `perspective(600px)`,
        }}
      >
        <ProjectBackground id={id} colorScheme={selectedColorScheme} />
        <ProjectContent layoutId={`${id}-content`}>
          <Header layoutId={`${id}-header`}>{title}</Header>
          {guide && <Guide />}
          <Technologies layoutId={`${id}-technologies`}>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </Technologies>
        </ProjectContent>
      </GridContent>
    </GridItem>
  );
};
