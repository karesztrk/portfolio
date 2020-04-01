import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, List, ListItem, Content, ItemIndicator } from './styles';

export const Tabs = ({ activeTab, children }) => {
  const [activeTabValue, setActiveTabValue] = useState(activeTab);
  const index = children.findIndex(child => child.props.tabKey === activeTabValue);
  const tabIndex = index > -1 ? index : 0;
  const tab = children[tabIndex];
  return (
    <Wrapper>
      <List>
        {children.map((child, i) => {
          const { title, tabKey, buttonGrow } = child.props;
          const onListItemClick = () => setActiveTabValue(tabKey);
          return (
            <ListItem key={tabKey} active={tabIndex === i} onClick={onListItemClick} grow={buttonGrow}>
              <ItemIndicator active={tabIndex === i} />
              {title}
            </ListItem>
          );
        })}
      </List>
      <Content>{tab.props.children}</Content>
    </Wrapper>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  children: PropTypes.array,
};
