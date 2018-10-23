import styled from 'styled-components';
import media from 'styled-media-query';

export default styled.a`
  display: inline-block;
  color: black;
  position: relative;
  margin-bottom: ${({ topMargin }) => (topMargin ? '3vw' : '0')};
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    left: -2px;
    right: -2px;
    top: 50%;
    background: currentColor;
    transform: translateY(-2px) rotateY(-90deg);
    transform-origin: 0 50%;
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    outline: 1px solid transparent;

    ${({ currentRoute }) => currentRoute !== undefined && !currentRoute && `
      transform: translateY(-2px) rotateY(0);
    `};
  }

  ${media.greaterThan('medium')`
    &:hover {
      color: blue;
    }
  `};
`;
