import { useLayoutEffect, useState } from 'react';
import { counterResultType } from '../types';
import { useWindowWidth } from './useWindowWidth';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const width = useWindowWidth();

  useLayoutEffect(() => setCounter(0), [width]);

  const result: counterResultType = [counter, setCounter];

  return result;
};
