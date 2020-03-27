import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

export const TabButton = ({ tabKey, title, onClick }) => {
  const onButtonClick = useCallback(() => onClick(tabKey), [onClick, tabKey]);
  return (
    <button type="button" onClick={onButtonClick}>
      {title}
    </button>
  );
};

TabButton.propTypes = {
  tabKey: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
