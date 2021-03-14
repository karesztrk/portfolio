import React, { FC } from 'react';

interface TabProps {
  title: string;
  tabKey: string;
  buttonGrow: number;
}

export const Tab: FC<TabProps> = ({ title, tabKey }) => (
  <div key={tabKey}>{title}</div>
);
