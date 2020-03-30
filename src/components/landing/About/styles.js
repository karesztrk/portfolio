import styled from 'styled-components';
import me from 'assets/pictures/me.jpg';

export const Wrapper = styled.section`
  padding: 12rem 0;
  color: #ffffff;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  font-size: 1.5rem;
  line-height: 2.2rem;

  a {
    color: #a7ff83;
  }

  @media (max-width: 960px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: justify;
  }
`;

export const PhotoFrame = styled.div`
  position: relative;
  width: 225px;
  height: 280px;
  margin: 0 auto;
  background: #a7ff83;
  box-shadow: 0px 10px 30px rgb(0, 0, 0);

  &:before {
    content: '';
    position: absolute;
    width: 225px;
    height: 280px;
    display: block;
    background-image: url(${me});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.25s ease 0s;
  }

  &:hover {
    &:before {
      transform: translate(-10px, -10px);
    }
  }
`;

export const TechContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  list-style: none;
  margin: 0;

  * {
    padding-right: 1rem;
    color: #086972;
    font-family: 'Montserrat';
    font-weight: 300;
  }
`;
