import { MediaQueryies } from 'components/common/Layout';
import styled, { css, ThemeProps } from 'styled-components';

const desktopStyle = ({ theme }: ThemeProps<MediaQueryies>) => css`
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

const nonDesktopStyle = ({ theme }: ThemeProps<MediaQueryies>) => css`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: ${theme.quaternaryColor};

  a {
    color: ${theme.primaryColor};
    font-family: ${theme.textFamily};
    font-size: 2rem;
    text-decoration: none;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: unset;
    }
  }
`;

export const Wrapper = styled.div<{ desktop?: boolean }>`
  ${({ desktop }) => (desktop ? desktopStyle : nonDesktopStyle)}
`;
