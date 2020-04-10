import styled, { css } from 'styled-components';

const sidebarStyle = ({ theme }) => css`
  right: 66%;
  top: 1.4rem;

  ${theme.sm`
    right: 35%;
  `}

  ${theme.md`
    right: 18%;
  `}
`;

const sideBarHiddenStyle = `
  right: 1.8rem;
  top: 1.6rem;
`;

export const Wrapper = styled.div`
  z-index: 5;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: fixed;
  display: block;

  ${({ theme }) => theme.md`
    display: none;
  `}

  ${({ sidebar }) => (sidebar ? sidebarStyle : sideBarHiddenStyle)}
`;

export const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: #ffffff;
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
		opacity 500ms,
		box-shadow 250ms,
		background-color 500ms;

	${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
    
    background-color: #ffffff;
		transform: translateY(8px) rotate(-135deg);
	`}

	${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
    	background-color: #ffffff;
			transform: scale(0);
	`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
    	background-color: #ffffff;
			transform: translateY(-6px) rotate(-45deg);
	`}
`;
