import React from 'react';
import { Layout, SEO, Footer, Main } from 'components/common';
import { Intro, About, Experience, Projects, Contact } from 'components/sections';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Main>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Main>
  </Layout>
);
