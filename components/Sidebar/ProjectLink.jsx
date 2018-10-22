import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import slugify from '../../utils/slugify';

import AnchorLink from './AnchorLink';

const A = styled.a`
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

  &:hover {
    color: blue;
  }
`;

const ProjectLink = ({ children }) => {
  const split = children[0].split(',');
  const slug = slugify(split[1], { lower: true });

  return (
    <li>
      {split[0]}
      <br />
      <AnchorLink href={{ pathname: '/', query: { projekt: slug } }} passHref>
        <A>{split[1]}</A>
      </AnchorLink>
    </li>
  );
};

ProjectLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectLink;
