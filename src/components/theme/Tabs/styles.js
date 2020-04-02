import styled from 'styled-components';
import item from 'assets/illustrations/timeline-item.inline.svg';

export const Wrapper = styled.div`
  display: flex;
  font-size: inherit;
`;

export const List = styled.ul`
  font-size: inherit;
  list-style: none;
  margin: 0;
  border-right: 10px solid ${({ theme }) => theme.tertiaryColor};
  min-width: 110px;

  ${({ theme }) => theme.md`
    min-width: 221px;
  `}
`;

export const ListItem = styled.li`
  position: relative;
  padding: 10px;
  mask-size: cover;
  cursor: pointer;
  color: ${({ theme }) => theme.quaternaryColor};
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.25s ease 0s;

  ${({ grow }) =>
    grow &&
    `
    margin-bottom: calc(${grow} * 1.5rem);
  `}

  &:after {
    content: '';
    position: absolute;
    display: block;
    border-radius: 100%;
    height: 1.25rem;
    width: 1.25rem;
    right: -15px;
    border: 5px solid ${({ theme, active }) => (active ? theme.primaryColor : theme.secondaryColor)};
    box-sizing: border-box;
    background-image: none;
    background-color: ${({ theme }) => theme.tertiaryColor};
    transition: border 0.25s ease 0s;
    top: -10px;
  }
`;

export const Content = styled.div`
  margin-left: 1.5rem;
  text-align: justify;

  ${({ theme }) => theme.md`
    text-align: left;
  `}
`;

export const ItemImage = styled(item)`
  position: absolute;
  transition: color 0.25s ease 0s;
  z-index: -1;
  top: 0;
  left: 0;
  color: ${({ state, theme }) => (state && state.active ? theme.primaryColor : theme.secondaryColor)};
  width: 110px;
  height: 100%;

  ${({ theme }) => theme.md`
    width: 221px;
  `}
`;
