import React from 'react';
import { Layout, SEO } from 'components/common';
import { PageProps } from 'gatsby';

export default function ErrorRoute(props: PageProps) {
  return (
    <Layout>
      <SEO title='404: Not found' />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}
