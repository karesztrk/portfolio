import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export const SectionHeader = styled(motion.div)`
  font-family: ${({ theme }) => theme.headerFamily};
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.md`
      justify-content: flex-start;
    `}

  h2 {
    margin: 0;
    font-weight: bold;
    font-size: 2.5rem;

    ${({ theme }) => theme.md`
        font-size: 3rem;
      `}
  }
`;
