import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const reveal = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Footer = styled.div`
  animation: ${reveal} 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  position: absolute;
  bottom: 10vmin;
  display: flex;
  align-items: center;

  img {
    background: #ccc;
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    vertical-align: center;
    margin-right: 20px;
  }

  ${media.greaterThan('medium')`
    max-width: 60vmin;
    width: 100%;
  `};
`;

const FooterComponent = ({ children }) => <Footer>{children}</Footer>;

FooterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterComponent;
