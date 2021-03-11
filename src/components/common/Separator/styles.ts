import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 12rem 0;
`;

export const SeparatorImage = styled.svg`
  display: block;
  margin: 0 auto;
  overflow: visible !important;
`;

export const SeparatorLightSide = styled(motion.path)`
  stroke: ${({ theme }) => theme.quaternaryColor};
  stroke-width: 5px;
  position: absolute;
`;

export const SeparatorLightMiddle = styled(motion.path)`
  stroke: ${({ theme }) => theme.quaternaryColor};
  fill: ${({ theme }) => theme.tertiaryColor};
  stroke-width: 5px;
`;

export const SeparatorDarkSide = styled(motion.path)`
  stroke: ${({ theme }) => theme.secondaryColor};
  stroke-width: 5px;
  position: absolute;
`;

export const SeparatorDarkMiddle = styled(motion.path)`
  stroke: ${({ theme }) => theme.tertiaryColor};
  fill: ${({ theme }) => theme.quaternaryColor};
  stroke-width: 5px;
`;
