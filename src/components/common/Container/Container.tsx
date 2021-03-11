import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  ${({ theme }) => theme.md`
    width: 90%;
  `}

  ${({ theme }) => theme.lg`
    width: 80%;
  `}
`;
