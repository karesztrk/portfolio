import React from 'react';
import PropTypes from 'prop-types';

export const ThemeIcon = ({ id, colorScheme, onClick }) => (
  <svg id={id} width="33" height="36" viewBox="0 0 33 36" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path
      d="M0.5 9.29262L16.0215 0.573489L31.5429 9.29262V26.7074L16.0215 35.4265L0.5 26.7074V9.29262Z"
      fill={`url(#${id}Gradient)`}
      stroke="white"
    />
    <defs>
      <linearGradient id={`${id}Gradient`} x1="16.0215" y1="0" x2="16.0215" y2="36" gradientUnits="userSpaceOnUse">
        <stop className="quaternary-color" stopColor={colorScheme.quaternaryColor} />
        <stop className="tertiary-color" stopColor={colorScheme.tertiaryColor} offset="0.359375" />
        <stop className="secondary-color" stopColor={colorScheme.secondaryColor} offset="0.671875" />
        <stop className="primary-color" stopColor={colorScheme.primaryColor} offset="1" />
      </linearGradient>
    </defs>
  </svg>
);

ThemeIcon.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colorScheme: PropTypes.object,
  onClick: PropTypes.func,
};
