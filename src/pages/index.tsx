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
        <Separator id='about' />
        <Experience />
        <Separator variant='dark' id='experience' />
        <Highlights />
        <Separator id='highlights' />
        <Projects />
        <Separator variant='dark' id='projects' />
        <Contact />
        <Footer />
      </Main>
    </Layout>
  );
}
