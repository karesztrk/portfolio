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
            <h4>Software developer</h4>
            <h4>2015 - Present</h4>
            <p>
              I currently work at an outsourcing company called Minero. Here I've learn a lot. This is not just about
              the enormous technical stuff but the way of delivering products to a customer in a mature way.
              <ul>
                <li>
                  Worked with several automotive companies as our customer: Volkswagen, ŠKODA, Porsche, BMW, Deloitte.
                </li>
                <li>On-site collaboration with developers, managers and product owners from all over the world</li>
                <li>Agile development, testing and delivering robust applications</li>
                <li>Backend development using Spring</li>
                <li>Big Data processing application development</li>
              </ul>
            </p>
          </Content>
        </Tab>
        <Tab tabKey="aensys" title="AENSys">
          <Content>
            <h4>Lead developer</h4>
            <h4>2012 - 2015</h4>
            <p>
              Working at this company was my first step to build applications to end-users. It taught all the challenges
              that can occur once the application becomes live.
              <ul>
                <li>Lead and coordinated a small (3-4) development team</li>
                <li>Keeping in touch with the customers and partners</li>
                <li>Application monitoring and defect handling</li>
                <li>Release management</li>
              </ul>
            </p>
          </Content>
        </Tab>
        <Tab tabKey="university" title="University of Szeged">
          <Content>
            <h4>Experienced developer</h4>
            <h4>2009 - 2015</h4>
            <p>
              I've started to work in the University before my graduation. Working and studying in parallel was not an
              easy way of life. But it certainly shaped and prepared me for life.
              <ul>
                <li>Collaboration with other universities</li>
                <li>Web application development in the e-health sector</li>
                <li>Comprehensive knowledge of the JBoss stack</li>
              </ul>
            </p>
          </Content>
        </Tab>
      </Tabs>
    </Details>
  </Wrapper>
);
