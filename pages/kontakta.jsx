import React from 'react';
import Head from 'next/head';
import Markdown, { compiler } from 'markdown-to-jsx';

import Hero from '../components/Hero';
import Footer from '../components/Footer';

import pageTitle from '../markdown/kontakta/pageTitle.md';
import pageDescription from '../markdown/index/pageDescription.md';
import hero from '../markdown/kontakta/hero.md';
import body from '../markdown/kontakta/body.md';

export default () => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:image" content="/static/anton-lind.jpg" />
    </Head>
    <Hero>{compiler(hero)}</Hero>
    <Footer>
      <img src="/static/anton-lind-small.png" alt="Anton Lind" />
      <Markdown>{body}</Markdown>
    </Footer>
  </>
);
