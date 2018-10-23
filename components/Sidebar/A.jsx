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
    position: absolute;
    left: -5px;
    right: -5px;
    top: 50%;
    height: 5px;
    background: currentColor;
    transform: translateY(-50%) rotateX(90deg);
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${({ currentRoute }) =>
      currentRoute !== undefined &&
      !currentRoute &&
      `
        transform: translateY(-50%) rotateX(0);
    `};
  }

  ${media.greaterThan('medium')`
    &:hover {
      color: blue;
    }
  `};
`;
