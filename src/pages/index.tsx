import React from 'react';
import { Layout, SEO, Footer, Main, Separator } from 'components/common';
import {
  Intro,
  About,
  Experience,
  Projects,
  Contact,
} from 'components/sections';

export default function IndexRoute() {
  return (
    <Layout>
      <SEO />
      <Intro />
      <Main>
        <About />
        <Separator />
        <Experience />
        <Separator variant='dark' />
        {/* <Highlights /> */}
        <Projects />
        <Separator variant='dark' />
        <Contact />
        <Footer />
      </Main>
    </Layout>
  );
}
