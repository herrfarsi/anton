import React from 'react';
import PropTypes from 'prop-types';

import slugify from '../../utils/slugify';

import A from './A';
import AnchorLink from './AnchorLink';

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
