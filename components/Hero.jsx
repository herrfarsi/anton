import Children from 'react-children-utilities';
import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Hero = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: calc(12px + 2.25vw);
    color: black;
    position: relative;
    perspective: 2000;
    font-weight: 300;
  
    span {
      opacity: 0;
      position: relative;
      display: inline-block;
      white-space: pre;
    }

    ${[...Array(150).keys()].map((value, key) => `
      span.index-${key + 1} {
        animation: ${reveal} 1s cubic-bezier(0.645, 0.045, 0.355, 1) ${key * 3}ms forwards;
      }
    `)}
  }
`;

export default class extends React.Component {
  renderChildren() {
    const {
      children,
    } = this.props;

    let index = 0;

    return Children.deepMap(children, child => {
      if (typeof child === 'string') {
        return [...child].map(char => {
          index += 1;
          return (<span className={`index-${index}`}>{char}</span>);
        });
      }
      
      return child;
    })
  }

  render() {
    return (
      <Hero >
        {this.renderChildren()}
      </Hero>
    );
  }
};