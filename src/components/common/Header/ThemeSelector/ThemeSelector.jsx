import React, { useState } from 'react';
import { Wrapper, SelectedTheme } from './styles';

export const ThemeSelector = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper state={{ open }}>
      <SelectedTheme onClick={() => setOpen(!open)} />
      <ul>Selector is open</ul>
    </Wrapper>
  );
};
