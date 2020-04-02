import styled, { css } from 'styled-components';

const activeStyle = ({ theme }) => css`
  width: 75%;
  right: 0px;
  opacity: 1;

  ${theme.sm`
    width: 40%;
  `}

  ${theme.md`
    width: 20%;
  `}
`;

const inactiveStyle = `
  width: 0;
  right: -275px;
  opacity: 0;
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0;
  height: 100%;
  background-color: #fff;
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) => (active ? activeStyle : inactiveStyle)}
`;
