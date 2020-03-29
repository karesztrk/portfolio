import React from 'react';
import { Container, Divider, SectionHeader } from 'components/common';
import { Tabs, Tab } from 'components/theme';
import { Wrapper, Details, Content } from './styles';

export const Experience = () => (
  <Wrapper as={Container} id="experience">
    <SectionHeader>
      <h2>Experience</h2>
      <Divider />
    </SectionHeader>
    <Details>
      <Tabs activeTab="first">
        <Tab tabKey="first" title="first title">
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ex ea commodo consequat.
          </Content>
        </Tab>
        <Tab tabKey="second" title="second title">
          <Content>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Content>
        </Tab>
      </Tabs>
    </Details>
  </Wrapper>
);
