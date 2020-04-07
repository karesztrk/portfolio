import styled from 'styled-components';
import Theme from 'assets/icons/theme.inline.svg';

export const Wrapper = styled.div`
  ul {
    margin: 0;
    padding: 1rem;
    position: absolute;
    display: ${({ state }) => (state.open ? 'block' : 'none')};
    background: white;
    border-radius: 9px;
  }
`;

export const SelectedTheme = styled(Theme)`
  cursor: pointer;
  .quaternary-color {
    stop-color: ${({ theme }) => theme.quaternaryColor};
  }

  .tertiary-color {
    stop-color: ${({ theme }) => theme.tertiaryColor};
  }

  .secondary-color {
    stop-color: ${({ theme }) => theme.secondaryColor};
  }

  .primary-color {
    stop-color: ${({ theme }) => theme.primaryColor};
  }
`;
