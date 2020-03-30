import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 12rem 0;
  color: #ffffff;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  ul {
    font-size: 1.5rem;

    @media (max-width: 960px) {
      font-size: 1rem;
    }
  }
`;

export const Content = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;
