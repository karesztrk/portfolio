import React from 'react';
import { Container } from 'components/common';
import { Tabs, Tab } from 'components/theme';
import { Wrapper, Details, Divider } from './styles';

export const Experience = () => (
  <Wrapper as={Container} id="experience">
    <h2>Experience</h2>
    <Divider />
    <Details>
      <Tabs activeTab="first">
        <Tab tabKey="first" title="first title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Tab>
        <Tab tabKey="second" title="second title">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Tab>
      </Tabs>
    </Details>
  </Wrapper>
);
