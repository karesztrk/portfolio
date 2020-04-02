import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, List, ListItem, Content, ItemImage } from './styles';

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
          const active = tabIndex === i;
          return (
            <ListItem key={tabKey} active={active} onClick={onListItemClick} grow={buttonGrow}>
              <ItemImage state={{ active }} />
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
