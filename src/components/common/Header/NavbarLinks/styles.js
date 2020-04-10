import styled, { css } from 'styled-components';

const desktopStyle = ({ theme }) => css`
  display: none;

  ${theme.md`
      display: flex;
      align-items: center;
  `}

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    transition: box-shadow 0.25s ease 0s;

    &:last-child {
      margin-right: unset;
    }

    &:hover {
      box-shadow: 0 4px 0 ${theme.secondaryColor};
    }
  }
`;

const nonDesktopStyle = ({ theme }) => css`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: ${theme.quaternaryColor};

  a {
    color: ${theme.primaryColor};
    font-family: ${theme.secondaryFont};
    font-size: 2rem;
    text-decoration: none;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: unset;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ desktop }) => (desktop ? desktopStyle : nonDesktopStyle)}
`;
