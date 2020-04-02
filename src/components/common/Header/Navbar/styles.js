import styled from 'styled-components';
import logo from 'assets/icons/logo.inline.svg';

export const Wrapper = styled.div`
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffffff;
  }
`;

export const LogoImage = styled(logo)`
  fill: rgba(0, 0, 0, 0);
  transition: fill 0.4s ease;
  &:hover {
    fill: ${({ theme }) => theme.tertiaryColor};
  }

  path.edge {
    stroke: ${({ theme }) => theme.tertiaryColor};
  }

  path.letter {
    fill: ${({ theme }) => theme.secondaryColor};
  }
`;
