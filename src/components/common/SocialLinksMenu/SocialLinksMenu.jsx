import React from 'react';
import Github from 'assets/icons/github.inline.svg';
import Email from 'assets/icons/email.inline.svg';
import LinkedIn from 'assets/icons/linkedin.inline.svg';
import Instagram from 'assets/icons/instagram.inline.svg';
import Youtube from 'assets/icons/youtube.inline.svg';
import Facebook from 'assets/icons/facebook.inline.svg';
import { Wrapper } from './styles';
import { SocialLinks } from '../SocialLinks';

export const SocialLinksMenu = () => (
  <Wrapper>
    <SocialLinks>
      <Github name="github" />
      <Email name="email" />
      <LinkedIn name="linkedin" />
      <Instagram name="instagram" />
      <Youtube name="youtube" />
      <Facebook name="facebook" />
    </SocialLinks>
  </Wrapper>
);
