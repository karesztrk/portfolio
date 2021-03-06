import styled, { css, ThemeProps } from 'styled-components';
import item from 'assets/illustrations/timeline-item.inline.svg';
import { MediaQueryies } from 'components/common/Layout';

export const Wrapper = styled.div`
  display: flex;
  font-size: inherit;
`;

export const List = styled.ul`
  font-size: inherit;
  list-style: none;
  margin: 0;
  border-right: 10px solid ${({ theme }) => theme.tertiaryColor};
  min-width: 110px;

  ${({ theme }) => theme.md`
    min-width: 221px;
  `}
`;

export const ListItem = styled.li<{ active: boolean; grow: number }>`
  position: relative;
  z-index: 0;
  padding: 10px;
  mask-size: cover;
  pointer-events: none;
  color: ${({ theme }) => theme.quaternaryColor};
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.25s ease 0s;

  ${({ grow }) =>
    grow &&
    `
    margin-bottom: calc(${grow} * 1.5rem);
  `}

  &:after {
    content: '';
    cursor: pointer;
    pointer-events: auto;
    position: absolute;
    display: block;
    border-radius: 100%;
    height: 1.25rem;
    width: 1.25rem;
    right: -15px;
    border: 5px solid
      ${({ theme, active }) =>
        active ? theme.primaryColor : theme.secondaryColor};
    box-sizing: border-box;
    background-image: none;
    background-color: ${({ theme }) => theme.tertiaryColor};
    transition: all 0.25s ease 0s;
    top: -10px;

    ${({ theme, active }) =>
      active &&
      `
        box-shadow: 0 0 10px ${theme.primaryColor};
      `}
  }
`;

export const Content = styled.div`
  margin-left: 1.5rem;
  text-align: justify;

  ${({ theme }) => theme.md`
    text-align: left;
  `}
`;

const activeStyle = ({ theme }: ThemeProps<MediaQueryies>) => css`
  width: 110px;

  ${theme.md`
    width: 221px;
  `}
`;

export const ItemImage = styled(item)`
  position: absolute;
  transition: color 0.25s ease 0s, width 0.25s ease;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  color: ${({ theme }) => theme.primaryColor};
  ${({ state }) =>
    state &&
    !state.active &&
    `
      width: 0%;
      `}

  ${({ state }) => state && state.active && activeStyle}
`;
