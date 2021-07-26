import { useLayoutEffect, useState } from 'react';
import { useWindowWidth } from './useWindowResize';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const width = useWindowWidth();

  useLayoutEffect(() => {
    setCounter(0);
  }, [width]);

  return { counter, setCounter };
};
