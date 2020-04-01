import styled from 'styled-components';

export const Divider = styled.div`
  width: 195px;
  height: 10px;
  background: #a7ff83;
  margin: 10px 0 10px 30px;

  @media (max-width: 960px) {
    margin: 7px 0 7px 30px;
    flex: 1;
    height: 5px;
  }
`;
