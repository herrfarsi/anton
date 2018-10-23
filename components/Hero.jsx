import React from 'react';
import PropTypes from 'prop-types';
import Children from 'react-children-utilities';
import styled, { keyframes, css } from 'styled-components';
import media from 'styled-media-query';

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
`;

const Hero = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;

  ${media.greaterThan('medium')`
    min-height: 80vh;
  `};

  h1 {
    margin: 0;
    font-size: calc(13px + 2.25vw);
    color: black;
    position: relative;
    perspective: 2000;
    font-weight: 300;

    span {
      opacity: 0;
      position: relative;
      display: inline-block;
      white-space: pre;
      will-change: transform;
    }

    ${[...Array(150).keys()].map((value, key) /* eslint-disable-line */ => css`
      span.index-${key + 1} {
        animation: ${reveal} 1s cubic-bezier(0.645, 0.045, 0.355, 1) ${key * 3}ms forwards;
      }
    `)};
  }
`;

class HeroComponent extends React.Component {
  renderChildren() {
    const { children } = this.props;

    let index = 0;

    return Children.deepMap(children, (child) => {
      if (typeof child === 'string') {
        return [...child].map((char) => {
          index += 1;
          return <span className={`index-${index}`}>{char}</span>;
        });
      }

      return child;
    });
  }

  render() {
    return <Hero>{this.renderChildren()}</Hero>;
  }
}

HeroComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroComponent;
