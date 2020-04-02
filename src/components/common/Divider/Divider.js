import styled from 'styled-components';

export const Divider = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.primaryColor};
  margin: 7px 0 7px 30px;
  flex: 1;

  ${({ theme }) => theme.md`
    width: 195px;
      flex-grow: 0;
      flex-basis: auto;
      margin: 10px 0 10px 30px;
      height: 10px;
  `}
`;
