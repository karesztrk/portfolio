import styled from 'styled-components';
import me from 'assets/pictures/me.jpg';

export const Wrapper = styled.div`
  padding: 12rem 0;
  color: #ffffff;
  @media (max-width: 960px) {
    flex-direction: column;
  }

  h2 {
    font-weight: bold;
    font-size: 3rem;
    display: inline-block;
  }
`;

export const Details = styled.div`
  display: flex;
`;

export const Column = styled.div`
  flex: 1;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Divider = styled.div`
  width: 195px;
  height: 10px;
  background: #a7ff83;
  display: inline-block;
  margin: 10px 0 10px 30px;
`;

export const PhotoFrame = styled.div`
  position: relative;
  width: 225px;
  height: 280px;
  margin: 0 auto;
  background-image: url(${me});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  transform-style: preserve-3d;

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    width: 225px;
    height: 280px;
    display: block;
    background: #a7ff83;
    right: -10px;
    bottom: -10px;
    transform: translateZ(-1px);
  }
`;
