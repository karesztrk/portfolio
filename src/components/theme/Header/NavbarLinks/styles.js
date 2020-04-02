import styled, { css } from 'styled-components';

const desktopStyle = ({ theme }) => css`
  display: none;

  ${theme.md`
    display: block;
  `}

  a {
    margin-right: 1rem;

    &:last-child {
      margin-right: unset;
    }
  }
`;

const nonDesktopStyle = `
  padding: 3rem;
  display: flex;
  flex-direction: column;

  a {
      margin-bottom: 1rem;

      &:last-child {
          margin-bottom: unset;
      }
  }
`;

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
  }

  ${({ desktop }) => (desktop ? desktopStyle : nonDesktopStyle)}
`;
