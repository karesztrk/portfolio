import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Experience } from 'components/landing';
import { Footer } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Experience />
    <Footer />
  </Layout>
);
