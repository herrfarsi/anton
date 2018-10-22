import React from 'react'
import App, { Container } from 'next/app';
import Router from 'next/router'
import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query';

import Layout from '../components/Layout';
import Loader from '../components/Loader';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Heebo', sans-serif;
    font-size: calc(12px + 0.75vmin);
    line-height: 1.35;
    color: #444;
    font-weight: 300; 
  }

  a {
    color: black;

    ${media.greaterThan('medium')`
      &:hover {
        color: blue;
      }
    `}
  }

  p {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    Router.events.on('routeChangeStart', (url) => {
      this.setState({ loading: true });
    })
    Router.events.on('routeChangeComplete', () => this.setState({ loading: false }))
    Router.events.on('routeChangeError', () => this.setState({ loading: false }))
  }
  
  render () {
    const { Component, pageProps } = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Loader isVisible={this.state.loading} />
      <GlobalStyle />
    </Container>
  }
}