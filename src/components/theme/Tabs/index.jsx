import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import { TabButton } from './TabButton';
import { Wrapper } from './styles';

export const Tabs = ({ activeTab, children }) => {
  const [activeTabValue, setActiveTabValue] = useState(activeTab);
  const tab = children.find(child => child.props.tabKey === activeTabValue);
  const onClick = key => setActiveTabValue(key);
  return (
    <Wrapper>
      <ul>
        {children.map(child => {
          const { title, tabKey } = child.props;
          return (
            <li key={tabKey}>
              <TabButton tabKey={tabKey} title={title} onClick={onClick} />
            </li>
          );
        })}
      </ul>
      <div>{tab.props.children}</div>
    </Wrapper>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  children: PropTypes.array,
};
