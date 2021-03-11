import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1.25rem 0 0.5rem 0;
  color: red;

  svg {
    padding-right: 20px;
    width: 24px;
  }

  svg:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
