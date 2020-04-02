import React from 'react';
import { Layout, SEO, Footer } from 'components/common';
import { Intro, About, Experience, Projects } from 'components/sections';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </Layout>
);
