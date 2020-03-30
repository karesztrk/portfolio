import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabButton } from './TabButton';
import { Wrapper, List, ListItem, Content, Indicator } from './styles';

export const Tabs = ({ activeTab, children }) => {
  const [activeTabValue, setActiveTabValue] = useState(activeTab);
  const index = children.findIndex(child => child.props.tabKey === activeTabValue);
  const tabIndex = index > -1 ? index : 0;
  const tab = children[tabIndex];
  return (
    <Wrapper>
      <List>
        {children.map((child, i) => {
          const { title, tabKey } = child.props;
          return (
            <ListItem key={tabKey} active={tabIndex === i}>
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
