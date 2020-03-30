import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 12rem 0;
  color: #ffffff;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
`;

export const Content = styled.div`
  line-height: 2.2rem;

  h4 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;
