import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabButton } from './TabButton';
import { Wrapper, List, ListItem, Content, Indicator } from './styles';

export const Tabs = ({ activeTab, children }) => {
  const [activeTabValue, setActiveTabValue] = useState(activeTab);
  const tabIndex = children.findIndex(child => child.props.tabKey === activeTabValue);
  const tab = children[tabIndex];
  return (
    <Wrapper>
      <List>
        {children.map((child, index) => {
          const { title, tabKey } = child.props;
          return (
            <ListItem key={tabKey} active={tabIndex === index}>
              <TabButton tabKey={tabKey} title={title} onClick={setActiveTabValue} />
            </ListItem>
          );
        })}
      </List>
      <Indicator position={tabIndex} />
      <Content>{tab.props.children}</Content>
    </Wrapper>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  children: PropTypes.array,
};
