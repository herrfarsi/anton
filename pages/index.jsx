import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { scroller, animateScroll } from 'react-scroll';
import Markdown, { compiler } from 'markdown-to-jsx';

import pageTitle from '../markdown/index/pageTitle.md';
import pageDescription from '../markdown/index/pageDescription.md';
import hero from '../markdown/index/hero.md';
import body from '../markdown/index/body.md';

import Hero from '../components/Hero';
import Content from '../components/Content';
import ProjectParagraph from '../components/ProjectParagraph';

const opts = {
  duration: 1000,
  smooth: true,
  offset: -15,
};

const Index = class extends React.Component {
  componentDidMount() {
    this.goTo();
  }

  componentDidUpdate() {
    this.goTo();
  }

  goTo() {
    const {
      router: {
        query: { projekt },
      },
    } = this.props;

    if (projekt) {
      scroller.scrollTo(projekt, opts);
    } else {
      animateScroll.scrollTo(0, opts);
    }
  }

  render() {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:image" content="/static/anton-lind.jpg" />
        </Head>
        <Hero>{compiler(hero)}</Hero>
        <Content>
          <Markdown
            options={{
              overrides: {
                p: {
                  component: ProjectParagraph,
                },
              },
            }}
          >
            {body}
          </Markdown>
        </Content>
      </>
    );
  }
};

Index.propTypes = {
  router: PropTypes.any.isRequired, // eslint-disable-line
};

export default withRouter(Index);
