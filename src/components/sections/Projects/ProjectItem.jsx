import React, { useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { GridItem, Header, ProjectContent, Footer, GridContent, Time, Description } from './styles';
import { ProjectBackground } from './ProjectBackground';
import { Guide } from './Guide';

export const ProjectItem = ({ project, guide }) => {
  const { title, technologies, time, description } = project;
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateX(${flipped ? 0 : 180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const theme = useContext(ThemeContext);
  const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = theme;
  const selectedColorScheme = { primaryColor, secondaryColor, tertiaryColor, quaternaryColor };
  const id = title.replace(' ', '').toLowerCase();
  return (
    <GridItem
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <GridContent style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <ProjectBackground id={id} colorScheme={selectedColorScheme} />
        <ProjectContent>
          <Header>{title}</Header>
          {guide && <Guide />}
          <Footer>
            {technologies.map(tech => (
              <li>{tech}</li>
            ))}
          </Footer>
        </ProjectContent>
      </GridContent>
      <GridContent style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
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

ProjectItem.propTypes = {
  project: PropTypes.object,
  guide: PropTypes.bool,
};
