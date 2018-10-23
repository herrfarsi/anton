import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
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
    font-size: calc(13px + 0.75vmin);
    line-height: 1.35;
    color: #444;
    font-weight: 300; 
    background: #f4eee3;
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

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Loader />
        <GlobalStyle />
      </Container>
    );
  }
}
