import styled from 'styled-components';
import heroBackground from 'assets/pictures/hero.svg';

export const Wrapper = styled.div`
  background: url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 8rem;

  ${({ theme }) => theme.md`
    padding-bottom: 4rem;
  `}
`;

export const IntroWrapper = styled.div`
  padding: 10vw 0 20vw 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}

  ${({ theme }) => theme.lg`
    padding: 10vw 0 30vw 0;
  `}
`;

export const Details = styled.div`
  flex-grow: 0;
  flex-basis: 100%;
  width: 100%;
  margin-bottom: 2rem;

  ${({ theme }) => theme.md`
    flex: 1;
  `}

  h1 {
    font-size: 2rem;
    line-height: 3rem;
    max-width: initial;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    margin: 0;

    ${({ theme }) => theme.md`
      font-size: 4rem;
      line-height: 5rem;
      max-width: 520px;
    `}
  }

  h4 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.primaryColor};
    margin: 0;

    ${({ theme }) => theme.md`
      font-size: 1.75rem;
    `}
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #ffffff;

    ${({ theme }) => theme.md`
      font-size: 1.5rem;
    `}
  }
`;
