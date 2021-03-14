import styled from 'styled-components';

export const Main = styled.main`
  background: linear-gradient(
    180deg,
    ${({ theme }) => `${theme.tertiaryColor} 0%, ${theme.quaternaryColor} 100%`}
  );
  overflow: hidden;
`;
