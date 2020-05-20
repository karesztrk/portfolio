import React, { useContext, useRef, useState } from 'react';
import { useSpring, config } from 'react-spring';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { GridItem, Header, ProjectContent, Footer } from './styles';
import { ProjectBackground } from './ProjectBackground';

export const ProjectItem = ({ project }) => {
  const { title, technologies } = project;
  const componentRef = useRef(null);
  const [flipped, setFlipped] = useState(false);
  const calc = (x, y) => {
    const elem = componentRef.current;
    return componentRef && componentRef.current
      ? [-(y - elem.clientHeight / 2) / 10, (x - elem.clientWidth / 2) / 10, 1.1]
      : [0, 0];
  };
  const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [springProps, setSpring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.wobbly,
  }));
  const { xys } = springProps;

  const theme = useContext(ThemeContext);
  const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = theme;
  const selectedColorScheme = { primaryColor, secondaryColor, tertiaryColor, quaternaryColor };
  const id = title.replace(' ', '').toLowerCase();
  return (
    <GridItem
      ref={componentRef}
      onClick={() => {
        if (flipped) {
          setSpring({ xys: [0, 0, 1] });
        } else {
          setSpring({ xys: [180, 0, 1.5] });
        }
        setFlipped(!flipped);
      }}
      onMouseMove={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        if (!flipped) {
          setSpring({ xys: calc(x, y) });
        }
      }}
      onMouseLeave={() => {
        if (!flipped) {
          setSpring({ xys: [0, 0, 1] });
        }
      }}
      style={{
        transform: xys.interpolate(trans),
      }}
    >
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
