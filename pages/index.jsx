import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { scroller, animateScroll } from 'react-scroll';

import PageTitle from '../markdown/index/pageTitle.mdx';
import PageDescription from '../markdown/index/pageDescription.mdx';
import HeroBody from '../markdown/index/hero.mdx';
import Body from '../markdown/index/body.mdx';

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
          <title><PageTitle /></title>
          <meta name="description" content={<PageDescription />} />
          <meta property="og:image" content="/static/anton-lind.jpg" />
        </Head>
        <Hero><HeroBody /></Hero>
        <Content>
          <Body
            components={{ p: ProjectParagraph }}
          />
        </Content>
      </>
    );
  }
};

Index.propTypes = {
  router: PropTypes.any.isRequired, // eslint-disable-line
};

export default withRouter(Index);
