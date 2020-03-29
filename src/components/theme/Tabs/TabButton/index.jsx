import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export const TabButton = ({ tabKey, title, onClick }) => {
  const onButtonClick = useCallback(() => onClick(tabKey), [onClick, tabKey]);
  return (
    <Button type="button" onClick={onButtonClick}>
      {title}
    </Button>
  );
};

TabButton.propTypes = {
  tabKey: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
