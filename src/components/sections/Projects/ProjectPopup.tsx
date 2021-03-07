import { motion } from 'framer-motion';
import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ProjectBackground } from './ProjectBackground';
import {
  Popup,
  PopupHeader,
  PopupContent,
  Time,
  Description,
  Technologies,
} from './styles';

interface ProjectPopupProps {
  project: {
    id: string;
    title: string;
    technologies: string[];
    time: number;
    description: string;
  };
  onClick: () => void;
}

const ProjectPopup: FC<ProjectPopupProps> = ({ project, onClick }) => {
  const theme = useContext(ThemeContext);
  const { id, time, description, title, technologies } = project;
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
    <Popup layoutId={id} onClick={onClick}>
      <ProjectBackground id={id} colorScheme={selectedColorScheme} />
      <PopupContent layoutId={`${id}-content`}>
        <Time
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {time}
        </Time>
        <PopupHeader layoutId={`${id}-header`}>{title}</PopupHeader>

        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {description}
        </Description>
        <Technologies layoutId={`${id}-technologies`}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </Technologies>
      </PopupContent>
    </Popup>
  );
};

export default ProjectPopup;
