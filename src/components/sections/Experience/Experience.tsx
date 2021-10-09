import React from "react";
import {
  Container,
  Divider,
  SectionHeader,
  Tabs,
  Tab,
} from "components/common";
import { Wrapper, Content, Details } from "./styles";
import useInViewAnimation from "hooks/useInViewAnimation";

const leftSide = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 1,
    },
  },
};

const header = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const Experience = () => {
  const { ref, animation } = useInViewAnimation();
  const lastChangeYear = new Date("2021").getFullYear();
  const currentYear = new Date().getFullYear();
  const currentYears = currentYear - lastChangeYear + 1;
  return (
    <Wrapper ref={ref} as={Container} id="experience">
      <SectionHeader initial="hidden" animate={animation} variants={header}>
        <h2>Experience</h2>
        <Divider />
      </SectionHeader>
      <Details initial="hidden" animate={animation} variants={leftSide}>
        <Tabs activeTab="chemaxon" animation={animation}>
          <Tab tabKey="chemaxon" title="ChemAxon" buttonGrow={currentYears}>
            <Content>
              <h4>
                Full-stack developer @&nbsp;
                <a
                  href="https://chemaxon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ChemAxon
                </a>
              </h4>
              <h4>2021 - Present</h4>
              <div>
                <p>
                  My current workplace is ChemAxon. The company is offering
                  several mature products to the Biotechnology and
                  Pharmaceutical industries. Over the years, their products
                  became industry standards. By joining to this family, I'm now
                  a - so called - ChemAxionian 👾.
                </p>
                <ul>
                  <li>
                    Opportunity to plan and implement a product Front-End
                    redesign fully autonomously
                  </li>
                  <li>
                    New way of thinking: I'm entering the Chemistry industry
                  </li>
                  <li>
                    Efficient team and business collaboration to serve quality
                    products to the customers
                  </li>
                  <li>Customer and consulting support</li>
                </ul>
              </div>
            </Content>
          </Tab>
          <Tab tabKey="minero" title="Minero IT" buttonGrow={6}>
            <Content>
              <h4>
                Software developer @&nbsp;
                <a
                  href="http://www.minero-it.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Minero IT
                </a>
              </h4>
              <h4>2015 - 2021</h4>
              <div>
                <p>
                  Minero holds a specal place in my hearth. It is - my first
                  employer in the private sector - a software consulting
                  company. Here I've learnt a lot. This is not just about about
                  the enormous technical stuff but the way of delivering
                  products to a customer in a mature way.
                </p>
                <ul>
                  <li>
                    Worked with several automotive companies as our customer:
                    Volkswagen, ŠKODA, Porsche, BMW, Deloitte.
                  </li>
                  <li>
                    On-site collaboration with developers, managers and product
                    owners from all over the world
                  </li>
                  <li>
                    Agile development, testing and delivering robust
                    applications
                  </li>
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
                <a
                  href="https://aensys.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AENSys
                </a>
              </h4>
              <h4>2012 - 2015</h4>
              <div>
                <p>
                  Working at this company was my first step to build
                  applications to end-users. It taught all things that can occur
                  once the application becomes live.
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
                <a
                  href="https://www.inf.u-szeged.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Institute of Informatics
                </a>
              </h4>
              <h4>2009 - 2012</h4>
              <div>
                <p>
                  I've started to work in the University before my graduation.
                  Working and studying in parallel was not easy way of life. But
                  it certainly shaped and prepared me for life.
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
    </Wrapper>
  );
};
