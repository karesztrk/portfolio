import React from 'react';
import { Container } from 'components/common';
import { socialLinks } from 'data/config';
import { Wrapper, Flex, Links } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Links>
        {social.map(({ name, icon }) => (
          <a
            key={name}
            href={socialLinks[name]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
