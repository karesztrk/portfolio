import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { GridItem, Header, ProjectContent, Footer } from './styles';
import { ProjectBackground } from './ProjectBackground';

export const ProjectItem = ({ project }) => {
  const { title, technologies } = project;

  const theme = useContext(ThemeContext);
  const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = theme;
  const selectedColorScheme = { primaryColor, secondaryColor, tertiaryColor, quaternaryColor };
  const id = title.replace(' ', '').toLowerCase();
  return (
    <GridItem>
      <ProjectBackground id={id} colorScheme={selectedColorScheme} />
      <ProjectContent>
        <Header>{title}</Header>
        <Footer>
          {technologies.map(tech => (
            <li>{tech}</li>
          ))}
        </Footer>
      </ProjectContent>
    </GridItem>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object,
};
