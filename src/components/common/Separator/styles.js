import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 12rem 0;

  svg {
    display: block;
    margin: 0 auto;
  }

  .separator-one-octa-side {
    stroke: ${({ theme }) => theme.quaternaryColor};
  }

  .separator-one-octa-middle {
    stroke: ${({ theme }) => theme.quaternaryColor};
    fill: ${({ theme }) => theme.tertiaryColor};
  }

  .separator-two-octa-side {
    stroke: ${({ theme }) => theme.secondaryColor};
  }

  .separator-two-octa-middle {
    stroke: ${({ theme }) => theme.tertiaryColor};
    fill: ${({ theme }) => theme.quaternaryColor};
  }
`;
