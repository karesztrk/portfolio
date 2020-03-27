import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 12rem 0;
  color: #ffffff;
  @media (max-width: 960px) {
    flex-direction: column;
  }

  h2 {
    font-weight: bold;
    font-size: 3rem;
    display: inline-block;
  }
`;

export const Details = styled.div`
`;

export const Divider = styled.div`
  width: 195px;
  height: 10px;
  background: #a7ff83;
  display: inline-block;
  margin: 10px 0 10px 30px;
`;
