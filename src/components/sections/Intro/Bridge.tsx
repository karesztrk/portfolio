import { Theme } from 'components/common/Layout/Layout';
import React, { createContext, FC } from 'react';

interface BridgeProps {
  theme?: Theme;
}

export const BridgeContext = createContext<BridgeProps>({});

const Bridge: FC<BridgeProps> = ({ theme, children }) => {
  return (
    <BridgeContext.Provider value={{ theme }}>
      {children}
    </BridgeContext.Provider>
  );
};

export default Bridge;
