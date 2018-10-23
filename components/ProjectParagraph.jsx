import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import slugify from '../utils/slugify';

function extractFirstText(str) {
  const matches = str.match(/(\(.*?\))/);

  return matches ? matches[1] : false;
}

const P = styled.p`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 5px;
    left: -20px;
    right: -10px;
    bottom: 5px;
    border-left: 4px solid black;
    transform: ${({ current }) => (current ? 'rotateX(0)' : 'rotateX(90deg)')};
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const ProjectParagraph = ({ children, router }) => {
  const name = extractFirstText(children[0]);

  if (name) {
    const slug = slugify(name, { lower: true });

    return (
      <P name={slug} id={slug} current={router.query.projekt === slug}>
        {React.Children.map(children, c => {
          if (typeof c === 'string') {
            return c.replace(name, '');
          }

          return c;
        })}
      </P>
    );
  }

  return <p>{children}</p>;
};

ProjectParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.any.isRequired, // eslint-disable-line
};

export default withRouter(ProjectParagraph);
