import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Wrapper, ThemeSelectorContainer } from './styles';
import { ThemeIcon } from '../Theme';

export const ThemeSelector = () => {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor, onChangeScheme, schemes } = theme;
  const selectedColorScheme = { primaryColor, secondaryColor, tertiaryColor, quaternaryColor };
  return (
    <Wrapper>
      <div>
        <ThemeIcon id="selectedTheme" colorScheme={selectedColorScheme} onClick={() => setOpen(!open)} />
      </div>
      <ThemeSelectorContainer state={{ open }} onBlur={() => setOpen(false)}>
        {schemes.map(scheme => {
          const { name, colors: colorScheme } = scheme;
          const onThemeClick = () => onChangeScheme(name);
          return <ThemeIcon id={name} key={name} colorScheme={colorScheme} onClick={onThemeClick} />;
        })}
      </ThemeSelectorContainer>
    </Wrapper>
  );
};
