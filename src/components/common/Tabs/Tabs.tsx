import React, { FC, useState } from 'react';
import { Wrapper, List, ListItem, Content, ItemImage } from './styles';

interface TabsProps {
  activeTab: string;
}

export const Tabs: FC<TabsProps> = ({ activeTab, children }) => {
  const [activeTabValue, setActiveTabValue] = useState(activeTab);
  const index =
    children && Array.isArray(children)
      ? children.findIndex(
          (child) => child && child.props.tabKey === activeTabValue,
        )
      : -1;
  const tabIndex = index > -1 ? index : 0;
  const tab = children[tabIndex];
  return (
    <Wrapper>
      <List>
        {children &&
          children.map((child, i) => {
            const { title, tabKey, buttonGrow } = child.props;
            const onListItemClick = () => setActiveTabValue(tabKey);
            const active = tabIndex === i;
            return (
              <ListItem
                key={tabKey}
                active={active}
                onClick={onListItemClick}
                grow={buttonGrow}
              >
                <ItemImage state={{ active }} />
                {active && <span>{title}</span>}
              </ListItem>
            );
          })}
      </List>
      <Content>{tab.props.children}</Content>
    </Wrapper>
  );
};
