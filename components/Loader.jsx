import styled from 'styled-components';

const Loader = styled.div`
  position: fixed;
  top: 50vh;
  left: 20vw;
  width: 7vmin;
  height: 7vmin;
  max-width: 50px;
  max-height: 50px;
  z-index: 2;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
  transform: ${({ isVisible }) => isVisible ? 'translateY(-50%)' : 'translateY(-50%) translateX(-100px) rotateY(90deg)'};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export default ({ isVisible }) => (
  <Loader isVisible={isVisible}>
    <Video autoPlay loop muted playsInline>
      <source src="/static/loader.mp4" type="video/mp4" />  
    </Video>  
  </Loader>
)