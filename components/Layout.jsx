import styled from 'styled-components';
import media from 'styled-media-query';

import Navigation from './Navigation';

const Flex = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row-reverse;
  `}
`;

const Main = styled.div`
  padding: 10vmin 10vmin 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ({ children }) => (
  <Flex>
    <Navigation />
    <Main>
      {children}
    </Main>
  </Flex>
);
