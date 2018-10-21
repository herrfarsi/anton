import Head from 'next/head'
import Markdown, { compiler } from 'markdown-to-jsx';

import Hero from '../components/Hero';
import Footer from '../components/Footer';

import pageTitle from '../data/kontakta/pageTitle.md';
import hero from '../data/kontakta/hero.md';
import body from '../data/kontakta/body.md';

export default () => (<>
  <Head>
    <title>{pageTitle}</title>
  </Head>
  <Hero>
    {compiler(hero)}
  </Hero>
  <Footer>
    <Markdown 
      children={body}
    />
  </Footer>
</>);