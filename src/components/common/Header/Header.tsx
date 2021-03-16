import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};
