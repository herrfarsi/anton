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
  
  ${media.greaterThan('medium')`
    max-width: 60vmin;
    width: 100%;
  `}
`;

export default ({ children }) => (
  <Footer>
    {children}
  </Footer>
);