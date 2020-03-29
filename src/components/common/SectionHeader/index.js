import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.45rem;

  h2 {
    margin: 0;
  }

  @media (max-width: 960px) {
    justify-content: space-between;
  }
`;