import React from 'react';
import { Container, SocialLinksMenu } from 'components/common';
import { Wrapper, Flex } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <SocialLinksMenu />
    </Flex>
  </Wrapper>
);
