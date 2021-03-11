import { AnimationControls, useAnimation } from 'framer-motion';
import React, { FC, useState } from 'react';
import { Wrapper, List, ListItem, Content, ItemImage } from './styles';

interface TabsProps {
  activeTab: string;
  animation: AnimationControls;
}

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.75,
    },
  },
};

const listItemVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 1.5,
      stiffness: 300,
      damping: 15,
    },
  },
};

export const Tabs: FC<TabsProps> = ({ activeTab, children, animation }) => {
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
      <List initial='hidden' animate={animation} variants={listVariants}>
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
                variants={listItemVariants}
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
