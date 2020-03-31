import styled from 'styled-components';
import itemActive from 'assets/illustrations/timeline-item-active.svg';
import itemActiveSmall from 'assets/illustrations/timeline-item-active-small.svg';
import itemInactive from 'assets/illustrations/timeline-item-inactive.svg';
import itemInactiveSmall from 'assets/illustrations/timeline-item-inactive-small.svg';

export const Wrapper = styled.div`
  display: flex;
  font-size: inherit;
`;

export const List = styled.ul`
  font-size: inherit;
  list-style: none;
  margin: 0;
  border-right: 10px solid #086972;
  min-width: 221px;

  @media (max-width: 960px) {
    min-width: 110px;
  }
`;

export const ListItem = styled.li`
  position: relative;
  padding: 10px;
  background: url(${itemInactive}) no-repeat center;
  background-size: cover;
  cursor: pointer;
  color: #071a52;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.25s ease 0s;

  ${({ grow }) =>
    grow &&
    `
    margin-bottom: calc(${grow} * 1.5rem);
  `}

  @media (max-width: 960px) {
    background: url(${itemInactiveSmall}) no-repeat center;
  }

  ${({ active }) =>
    active &&
    `
    background: url(${itemActive}) no-repeat center;
  `}

  @media (max-width: 960px) {
    ${({ active }) =>
      active &&
      `
      background: url(${itemActiveSmall}) no-repeat center;
    `}
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    border-radius: 100%;
    height: 1.25rem;
    width: 1.25rem;
    right: -15px;
    border: 5px solid #17b978;
    box-sizing: border-box;
    background-image: none;
    background-color: #086972;
    transition: border 0.25s ease 0s;
    top: -10px;

    ${({ active }) =>
      active &&
      `
      border: 5px solid #a7ff83;
    `}
  }
`;

export const Content = styled.div`
  margin: 0 1.5rem;

  @media (max-width: 960px) {
    text-align: justify;
  }
`;
