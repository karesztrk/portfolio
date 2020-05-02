import React from 'react';
import { Container } from 'components/common';
import { contact } from 'data/config';
import { Wrapper, Title, Paragraph } from './styles';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Title>What's next?</Title>
    <Paragraph>
      So are you still with me? Maybe you want to get in touch? Just drop me an&nbsp;
      <a href={`mailto:${contact.email}`}>email</a>
      &nbsp;and I’ll respond as fast as I can. If you are interested about my work or plan to do some business then
      forget to take my&nbsp;
      <a href="/doc/Karoly_Torok.pdf" download>
        Resume
      </a>
      .
    </Paragraph>
  </Wrapper>
);
