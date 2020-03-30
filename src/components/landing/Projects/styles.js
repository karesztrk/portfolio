import styled from 'styled-components';
import header from 'assets/illustrations/article-header.svg';
import footer from 'assets/illustrations/article-footer.svg';

export const Wrapper = styled.section`
  padding: 12rem 0;
  color: #ffffff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 1.5rem;
`;

export const GridItem = styled.article`
  background: #086972;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 3.5rem 1.5rem;
  position: relative;
  transition: all 0.25s ease 0s;

  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0px 10px 30px rgb(0, 0, 0);
  }
`;

export const Description = styled.p`
  font-size: 1rem;
`;

export const Header = styled.header`
  h4 {
    font-size: 1.5rem;
  }

  time {
    font-size: 1.2rem;
    background: url(${header}) no-repeat center;
    background-size: cover;
    padding: 0.6rem 1.6rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #071a52;
    font-weight: bold;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    max-width: 50%;
    margin: 0.5rem 0 0.5rem 1.5rem;
    font-size: 0.875rem;
    font-family: 'Montserrat';
    font-weight: 300;

    li {
      display: inline;
      padding-right: 0.5rem;
    }
  }

  div {
    font-size: 1.2rem;
    background: url(${footer}) no-repeat center;
    background-size: cover;
    text-align: right;
    color: #071a52;
    font-weight: bold;
    padding: 0.6rem 1.5rem;
    min-width: 5.5rem;
  }
`;
