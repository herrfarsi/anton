import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

import Data from '../../markdown/navigation.mdx';

import A from './A';
import ActiveLink from './ActiveLink';
import ProjectLink from './ProjectLink';

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

const Sidebar = styled.nav`
  animation: ${reveal} 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  padding: 10vmin;
  font-size: calc(13px + 1vw);
  position: absolute;

  ${media.greaterThan('medium')`
    position: relative;
    padding: 10vmin 10vmin 10vmin 0;
    position: sticky;
    top: 0;
    height: calc(100vh - 1px); // Last name in navigation jumps if not doing this
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(70px + 20vw);
    flex-shrink: 0;
  `};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DesktopLinks = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `};
`;

export default () => (
  <Sidebar>
    <List>
      <li>
        <ActiveLink scroll={false} href="/" passHref>
          <A>Introduktion</A>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink scroll={false} href="/kontakta" passHref>
          <A topMargin>Kontakta mig</A>
        </ActiveLink>
      </li>
      <DesktopLinks>
        <Data
          components={{ p: ProjectLink }}
        />
      </DesktopLinks>
    </List>
  </Sidebar>
);
