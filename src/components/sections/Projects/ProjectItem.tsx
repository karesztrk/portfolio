import React, { FC, useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import { ThemeContext } from 'styled-components';
import {
  GridItem,
  Header,
  ProjectContent,
  Footer,
  GridContent,
  Time,
  Description,
} from './styles';
import { ProjectBackground } from './ProjectBackground';
import { Guide } from './Guide';

interface ProjectItemProps {
  project: {
    title: string;
    technologies: string[];
    time: number;
    description: string;
  };
  guide: boolean;
}

export const ProjectItem: FC<ProjectItemProps> = ({ project, guide }) => {
  const { title, technologies, time, description } = project;
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateX(${flipped ? 0 : 180}deg)`,
  });

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
  const id = title.replace(' ', '').toLowerCase();
  return (
    <GridItem
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <GridContent
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <ProjectBackground id={id} colorScheme={selectedColorScheme} />
        <ProjectContent>
          <Header>{title}</Header>
          {guide && <Guide />}
          <Footer>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </Footer>
        </ProjectContent>
      </GridContent>
      <GridContent
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <ProjectBackground id={id} back colorScheme={selectedColorScheme} />
        <ProjectContent>
          <Header>{title}</Header>
          <Description>{description}</Description>
          <Time>{time}</Time>
        </ProjectContent>
      </GridContent>
    </GridItem>
  );
};
