import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.md`
    display: block;
  `}

  svg {
    cursor: pointer;
  }
`;

export const ThemeSelectorContainer = styled.div`
  padding: 1rem;
  position: absolute;
  background: white;
  border-radius: 9px;
  transition: all 0.25s ease 0s;
  display: block;
  right: 0;
  ${({ state }) =>
    !state.open &&
    `
      opacity: 0;
    `}
  }
`;
