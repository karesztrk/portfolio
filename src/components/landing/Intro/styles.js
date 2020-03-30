import styled from 'styled-components';
import introBackground from 'assets/pictures/intro.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background: url(${introBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    padding-bottom: 8rem;
  }
`;

export const IntroWrapper = styled.div`
  padding: 10vw 0 20vw 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 5rem;
    text-transform: uppercase;
    max-width: 520px;
    margin: 0;

    @media (max-width: 680px) {
      font-size: 1.5rem;
      line-height: 3rem;
      max-width: initial;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #a7ff83;
    margin: 0;

    @media (max-width: 680px) {
      font-size: 2rem;
    }
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #ffffff;

    @media (max-width: 680px) {
      font-size: 1rem;
    }
  }
`;
