import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled.div`
  padding: 12rem 0;
`;

export const SeparatorImage = styled.svg`
  display: block;
  margin: 0 auto;
  overflow: visible !important;
`;

export const SeparatorLightSide = animated(styled.path`
  stroke: ${({ theme }) => theme.quaternaryColor};
  stroke-width: 5px;
`);

export const SeparatorLightMiddle = animated(styled.path`
  stroke: ${({ theme }) => theme.quaternaryColor};
  fill: ${({ theme }) => theme.tertiaryColor};
  stroke-width: 5px;
`);

export const SeparatorDarkSide = animated(styled.path`
  stroke: ${({ theme }) => theme.secondaryColor};
  stroke-width: 5px;
`);

export const SeparatorDarkMiddle = animated(styled.path`
  stroke: ${({ theme }) => theme.tertiaryColor};
  fill: ${({ theme }) => theme.quaternaryColor};
  stroke-width: 5px;
`);
