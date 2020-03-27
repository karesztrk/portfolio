import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About } from 'components/landing';
import { Footer } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Footer />
  </Layout>
);
