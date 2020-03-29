import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-size: inherit;
`;

export const List = styled.ul`
  font-size: inherit;
  list-style: none;
  margin-bottom: 0;
  text-align: right;
`;

export const ListItem = styled.li`
  margin: 0;
  height: 5rem;

  @media (max-width: 960px) {
    height: 3rem;
  }
`;

export const Content = styled.div`
  margin-left: 1.5rem;

  @media (max-width: 960px) {
    text-align: justify;
  }
`;

export const Indicator = styled.div`
  background: #086972;
  min-width: 10px;

  @media (max-width: 960px) {
    min-width: 5px;
  }

  &:after {
    content: '';
    display: block;
    height: 5rem;
    background: #a7ff83;
    transition: transform 300ms ease;

    @media (max-width: 960px) {
      height: 3rem;

      ${({ position }) =>
        position &&
        `
          transform: translateY(calc(3rem * ${position}));
        `}
    }

    ${({ position }) =>
      position &&
      `
        transform: translateY(calc(5rem * ${position}));
      `}
  }
`;
