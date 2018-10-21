import React from 'react'
import styled from 'styled-components';
import App, { Container } from 'next/app';
import Router from 'next/router'

import Layout from '../components/Layout';
import Loader from '../components/Loader';

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
    </Container>
  }
}