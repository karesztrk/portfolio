import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tabKey, title }) => <div key="tabKey">{title}</div>;

Tab.propTypes = {
  tabKey: PropTypes.string,
  title: PropTypes.string,
};
