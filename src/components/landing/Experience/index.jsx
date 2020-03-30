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
      <Tabs activeTab="minero">
        <Tab tabKey="minero" title="Minero IT">
          <Content>
            <h4>Software Developer</h4>
            <h4>2015 - Present</h4>
            <p>
              I currently work at an outsourcing company called Minero. Here I've learn a lot. This is not just about
              the enormous technical stuff but the way of delivering products to a customer in a mature way.
              <ul>
                <li>
                  Worked with several automotive companies (Volkswagen, Skoda, Porsche, BMW, Deloitte) as a customer.
                  their stack and regulations is a must.
                </li>
                <li>
                  Onsite development and cooperation with developers, managers and product owners from all over the
                  world.
                </li>
              </ul>
            </p>
          </Content>
        </Tab>
        <Tab tabKey="aensys" title="AENSys">
          <Content>
            <h4>Lead Developer</h4>
            <h4>2012 - 2015</h4>
          </Content>
        </Tab>
        <Tab tabKey="university" title="University of Szeged">
          <Content>
            <h4>Experienced Developer</h4>
            <h4>2009 - 2015</h4>
          </Content>
        </Tab>
      </Tabs>
    </Details>
  </Wrapper>
);
