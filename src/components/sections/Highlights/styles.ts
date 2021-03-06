import styled from 'styled-components';

export const Wrapper = styled.section`
  color: #ffffff;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}
`;
