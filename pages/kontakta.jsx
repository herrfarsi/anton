import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';
import Footer from '../components/Footer';

import PageTitle from '../markdown/kontakta/pageTitle.mdx';
import PageDescription from '../markdown/index/pageDescription.mdx';
import HeroBody from '../markdown/kontakta/hero.mdx';
import Body from '../markdown/kontakta/body.mdx';

export default () => (
  <>
    <Head>
      <title><PageTitle /></title>
      <meta name="description" content={<PageDescription />} />
      <meta property="og:image" content="/static/anton-lind.jpg" />
    </Head>
    <Hero><HeroBody /></Hero>
    <Footer>
      <img src="/static/anton-lind-small.png" alt="Anton Lind" />
      <Body />
    </Footer>
  </>
);
