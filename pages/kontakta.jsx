import Head from 'next/head'
import Markdown, { compiler } from 'markdown-to-jsx';

import Hero from '../components/Hero';
import Footer from '../components/Footer';

import pageTitle from '../data/kontakta/pageTitle.md';
import pageDescription from '../data/index/pageDescription.md';
import hero from '../data/kontakta/hero.md';
import body from '../data/kontakta/body.md';

export default () => (<>
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta property="og:image" content="/static/anton-lind.jpg" />
  </Head>
  <Hero>
    {compiler(hero)}
  </Hero>
  <Footer>
    <img src="/static/anton-lind-small.png" alt="Anton Lind" />
    <Markdown 
      children={body}
    />
  </Footer>
</>);