import { AnimationControls, motion } from 'framer-motion';
import React, { FC, ReactNode, ReactNodeArray, useState } from 'react';
import { Wrapper, List, ListItem, Content, ItemImage } from './styles';

interface TabsProps {
  activeTab: string;
  animation: AnimationControls;
  children: ReactNodeArray;
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

const itemContentVariants = {
  initial: {},
  inactive: {
    opacity: 0.1,
  },
  active: {
    opacity: 1,
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
          children.map((child: ReactNode, i: number) => {
            if (!child) {
              return null;
            }
            const { title, tabKey, buttonGrow } = child.props;
            const active = tabIndex === i;
            return (
              <ListItem
                key={tabKey}
                active={active}
                onClick={() => setActiveTabValue(tabKey)}
                grow={buttonGrow}
                variants={listItemVariants}
              >
                <motion.div
                  initial='initial'
                  animate={active ? 'active' : 'inactive'}
                  variants={itemContentVariants}
                >
                  <ItemImage />
                  <span>{title}</span>
                </motion.div>
              </ListItem>
            );
          })}
      </List>
      {tab && <Content>{tab.props.children}</Content>}
    </Wrapper>
  );
};
