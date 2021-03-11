import React from 'react';
import { Layout, SEO, Footer, Main, Separator } from 'components/common';
import {
  Intro,
  About,
  Experience,
  Projects,
  Contact,
  Highlights,
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
        <Highlights />
        <Separator />
        <Projects />
        <Separator variant='dark' />
        <Contact />
        <Footer />
      </Main>
    </Layout>
  );
}
