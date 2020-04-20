import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1.25rem 0 0.5rem 0;

  svg {
    padding-right: 20px;
    width: 24px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
      filter: grayscale(100%);
    }

    &:hover {
      img {
        filter: none;
      }
    }
  }
`;
