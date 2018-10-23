import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import slugify from '../../utils/slugify';

import A from './A';
import AnchorLink from './AnchorLink';

const Name = styled.span`
  display: block;
  color: #999;
`;

const ProjectLink = ({ children }) => {
  const split = children[0].split(',');
  const slug = slugify(split[1], { lower: true });

  return (
    <li>
      <Name>{split[0]}</Name>
      <AnchorLink scroll={false} href={{ pathname: '/', query: { projekt: slug } }} passHref>
        <A>{split[1]}</A>
      </AnchorLink>
    </li>
  );
};

ProjectLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectLink;
