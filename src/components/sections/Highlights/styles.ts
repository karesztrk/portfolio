import styled from 'styled-components';

export const Wrapper = styled.section`
  color: #ffffff;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}
`;

export const Column = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: justify;
  line-height: 2rem;
  padding: 0 1rem;

  a {
    color: ${({ theme }) => theme.primaryColor};
  }

  ${({ theme }) => theme.md`
    font-size: 1.2rem;
    line-height: 2.2rem;
    text-align: left;
  `}
`;
