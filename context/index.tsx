//importing context & types
import { createContext, useState } from 'react';
import { WidthState } from '../interfaces';

export const WindowContext = createContext<WidthState>({
  width: null,
  setWidth: () => '',
});

export const WindowProvider: React.FC = ({ children }) => {
  const [width, setWidth] = useState<number | null>(null);

  return (
    <WindowContext.Provider value={{ width, setWidth }}>
      {children}
    </WindowContext.Provider>
  );
};
