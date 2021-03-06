import { ColorScheme } from 'components/common/Header/ThemeSelector/ThemeSelector';
import React, { FC } from 'react';

interface ProjectBackgroundProps {
  id: string;
  colorScheme: ColorScheme;
  back?: boolean;
}

export const ProjectBackground: FC<ProjectBackgroundProps> = ({
  id,
  colorScheme,
  back,
}) => (
  <svg
    width='302'
    height='262'
    viewBox='0 0 302 262'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M300.723 131.496L225.303 261.001L75.1631 260.595L0.443967 130.684L75.8644 1.17927L226.004 1.58515L300.723 131.496Z'
      fill={`url(#${id}ProjectGradient${back ? 'Back' : ''})`}
      strokeWidth='3'
      stroke={colorScheme.primaryColor}
    />
    <defs>
      <linearGradient
        id={`${id}ProjectGradient${back ? 'Back' : ''}`}
        x1='151'
        y1='1'
        x2='151'
        y2='272.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop
          stopColor={
            back ? colorScheme.quaternaryColor : colorScheme.tertiaryColor
          }
        />
        <stop
          stopColor={
            back ? colorScheme.quaternaryColor : colorScheme.quaternaryColor
          }
          offset='1'
        />
      </linearGradient>
    </defs>
  </svg>
);
