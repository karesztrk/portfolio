import React, { FC } from 'react';
import { socialLinks } from 'data/config';

export const SocialLinks: FC = ({ children }) =>
  React.Children.map(children, (child) => {
    const { name } = child.props;
    return (
      <a
        key={name}
        href={socialLinks[name]}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`follow me on ${name}`}
      >
        {child}
      </a>
    );
  });
