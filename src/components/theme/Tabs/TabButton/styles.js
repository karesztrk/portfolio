import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  background: inherit;
  color: inherit;
  text-decoration: none;
  padding: 1.5rem;
  cursor: pointer;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 960px) {
    font-size: 1.2rem;
    padding: 1rem;
  }
`;
