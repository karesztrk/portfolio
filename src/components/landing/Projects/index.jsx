import React from 'react';
import { Container, SectionHeader, Divider } from 'components/common';
import { Wrapper, Grid, GridItem, Header, Footer, Description } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <SectionHeader>
      <h2>Projects</h2>
      <Divider />
    </SectionHeader>
    <Grid>
      <GridItem>
        <Header>
          <time>2018</time>
          <h4>ŠKODA Connect</h4>
        </Header>
        <Description>
          Automated remote vehicle management. The users can comfortably check their vehicle status, health or even plan
          trips ahead.
        </Description>
        <Footer>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Spring Cloud</li>
            <li>Gradle</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2018</time>
          <h4>Trustee</h4>
        </Header>
        <Description>
          The Trustee framework is flexible solution to pseudonymize information during data ingest. It primarily
          focuses on being an encryption coordinator between participants in a Big Data environment.
        </Description>
        <Footer>
          <ul>
            <li>Hadoop</li>
            <li>Spark</li>
            <li>Flume</li>
            <li>Hive</li>
          </ul>
          <div>Big data</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2017</time>
          <h4>DataService</h4>
        </Header>
        <p>
          DataService is a JAVAEE application which provides a very intuitive solution to build and manage extra-large
          databases. One of the main advantage of this application is the ability to automatically generate SQL queries
          by non-developers.
        </p>
        <Footer>
          <ul>
            <li>Primefaces</li>
            <li>Websphere</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2017</time>
          <h4>CARDO</h4>
        </Header>
        <p>
          The program itself calculates and transfers emission data for every car according to the new Government
          regulations. In this project, I've designed the Hub and wrote the specification before the development. That
          document covered covered all parts of the application along with the communication with external services.
        </p>
        <Footer>
          <ul>
            <li>Glassfish</li>
            <li>EJB</li>
            <li>JMS</li>
            <li>JPA</li>
          </ul>
          <div>Microservice</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2017</time>
          <h4>IPL</h4>
        </Header>
        <p>
          This project aimed to create a new and more advanced web application to the dealers to manage and sell cars.
        </p>
        <Footer>
          <ul>
            <li>Play</li>
            <li>React</li>
            <li>Swagger</li>
            <li>EJB</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2016</time>
          <h4>BDOTOM</h4>
        </Header>
        <p>
          BDOTOM is an application to manage employee time-offs, holidays and resources for any company. Employees can
          submit and review their holidays. And on the other hand, managers can organize their team and resources. The
          application also provides an easy way to manage holidays for HR assistants.
        </p>
        <Footer>
          <ul>
            <li>EJB</li>
            <li>JBoss</li>
            <li>AngularJS</li>
            <li>JAXRS</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2016</time>
          <h4>ForumStar</h4>
        </Header>
        <p>
          ForumStar is a text editor desktop application. Unlike the most popular text editors, ForumStar also supports
          supports developer mode. In this mode advanced users are able to create complex forms with most popular
          programming tools like: For, If, While, Connection, etc.
        </p>
        <Footer>
          <ul>
            <li>JavaFX</li>
            <li>FXML</li>
            <li>CSS</li>
          </ul>
          <div>Desktop</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2016</time>
          <h4>BIP</h4>
        </Header>
        <p>
          The application is a unique tool to create, maintain and execute SQL commands towards a database. The program
          is primarily developed for Second-level Support.
        </p>
        <Footer>
          <ul>
            <li>Glassfish</li>
            <li>EJB</li>
            <li>OracleDB</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2016</time>
          <h4>StarMonitor</h4>
        </Header>
        <p>
          StarMonitor is a very complex project & workflow management application. A single presentation wraps all the
          inquiries and supplier offers which results a nomination. Users of the application are able to browse and
          control the flow to get the best result and profit.
        </p>
        <Footer>
          <ul>
            <li>Spring</li>
            <li>ActiveMQ</li>
            <li>JSF</li>
            <li>JPA</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2015</time>
          <h4>PSC</h4>
        </Header>
        <p>
          The PSC web application is a web application for project managers. Using this tool, the users are able to
          maintain several vehicle manufacturing projects and their assets.
        </p>
        <Footer>
          <ul>
            <li>Spring</li>
            <li>Liquibase</li>
            <li>JPA</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2014</time>
          <h4>Alarmmannen</h4>
        </Header>
        <p>
          The platform supports several security manufacturers and their home security solutions. The application
          listens for security events. The server is not only capable to remotely control the secured premises but able
          to recognize and start a process which alerts the end-users or guarding companies.
        </p>
        <Footer>
          <ul>
            <li>JavaEE</li>
            <li>JBoss</li>
            <li>Seam</li>
            <li>JSF</li>
            <li>Magento</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2013</time>
          <h4>DKH</h4>
        </Header>
        <p>
          The purpose of this project is to make the doctors’ life easier with an easy-to-use web application. Besides
          patient and document management, the doctors are able to assemble medical forms to collect patient data.
        </p>
        <Footer>
          <ul>
            <li>JavaEE</li>
            <li>JBoss</li>
            <li>Seam</li>
            <li>JSF</li>
            <li>Hibernate</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2012</time>
          <h4>Gremon</h4>
        </Header>
        <p>
          Greenhouse management system. The software monitors and manages several greenhouses and their crops. It also
          helps to effectively manage the employees.
        </p>
        <Footer>
          <ul>
            <li>JavaEE</li>
            <li>JBoss</li>
            <li>Seam</li>
            <li>JSF</li>
            <li>Hibernate</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
      <GridItem>
        <Header>
          <time>2009</time>
          <h4>Proseniis</h4>
        </Header>
        <p>
          E-health application. The purpose of the application was to collect and monitor healthcare data. The
          application also gave a unified web interface for both the patients and the doctors. The application also gave
          the opportunity to the healthcare employees to set up automatized workflows.
        </p>
        <Footer>
          <ul>
            <li>JavaEE</li>
            <li>JBoss</li>
            <li>Seam</li>
            <li>JSF</li>
            <li>Hibernate</li>
          </ul>
          <div>Web</div>
        </Footer>
      </GridItem>
    </Grid>
  </Wrapper>
);
