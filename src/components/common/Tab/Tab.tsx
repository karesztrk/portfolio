import React, { FC } from 'react';

export const Tab: FC<{ title: string; tabKey: string; buttonGrow: number }> = ({
  title,
  tabKey,
}) => <div key={tabKey}>{title}</div>;
