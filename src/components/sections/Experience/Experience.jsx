import React from 'react';
import { Container, Divider, SectionHeader, Tabs, Tab, Separator } from 'components/common';
import { Wrapper, Content, Details } from './styles';

export const Experience = () => (
  <Wrapper as={Container} id="experience">
    <SectionHeader>
      <h2>Experience</h2>
      <Divider />
    </SectionHeader>
    <Details>
      <Tabs activeTab="minero">
        <Tab tabKey="minero" title="Minero IT" buttonGrow={5}>
          <Content>
            <h4>
              Software developer @&nbsp;
              <a href="http://www.minero-it.hu/" target="_blank" rel="noopener noreferrer">
                Minero IT
              </a>
            </h4>
            <h4>2015 - Present</h4>
            <div>
              <p>
                I currently work at an outsourcing company called Minero. Here I've learn a lot. This is not just about
                about the enormous technical stuff but the way of delivering products to a customer in a mature way.
              </p>
              <ul>
                <li>
                  Worked with several automotive companies as our customer: Volkswagen, ŠKODA, Porsche, BMW, Deloitte.
                </li>
                <li>On-site collaboration with developers, managers and product owners from all over the world</li>
                <li>Agile development, testing and delivering robust applications</li>
                <li>Backend development using Spring</li>
                <li>Big Data processing application development</li>
              </ul>
            </div>
          </Content>
        </Tab>
        <Tab tabKey="aensys" title="AENSys" buttonGrow={3}>
          <Content>
            <h4>
              Lead developer @&nbsp;
              <a href="https://aensys.hu/" target="_blank" rel="noopener noreferrer">
                AENSys
              </a>
            </h4>
            <h4>2012 - 2015</h4>
            <div>
              <p>
                Working at this company was my first step to build applications to end-users. It taught all things that
                can occur once the application becomes live.
              </p>
              <ul>
                <li>Lead and coordinated a small (3-4) development team</li>
                <li>Keeping in touch with the customers and partners</li>
                <li>Application monitoring and defect handling</li>
                <li>Release management</li>
              </ul>
            </div>
          </Content>
        </Tab>
        <Tab tabKey="university" title="University of Szeged" buttonGrow={3}>
          <Content>
            <h4>
              Experienced developer @&nbsp;
              <a href="https://www.inf.u-szeged.hu/" target="_blank" rel="noopener noreferrer">
                Institute of Informatics
              </a>
            </h4>
            <h4>2009 - 2012</h4>
            <div>
              <p>
                I've started to work in the University before my graduation. Working and studying in parallel was not
                easy way of life. But it certainly shaped and prepared me for life.
              </p>
              <ul>
                <li>Collaboration with other universities</li>
                <li>Web application development in the e-health sector</li>
                <li>Comprehensive knowledge of the JBoss stack</li>
              </ul>
            </div>
          </Content>
        </Tab>
      </Tabs>
    </Details>
    <Separator variant="dark" />
  </Wrapper>
);
