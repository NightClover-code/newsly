import { MutableRefObject, useState, useEffect } from 'react';
import { useWindowWidth } from './useWindowWidth';

export const useHeight = (
  containerRef: MutableRefObject<HTMLDivElement | null>
) => {
  const requiredHeight = containerRef.current?.clientHeight! + 60;

  const [height, setHeight] = useState(0);
  const width = useWindowWidth();

  useEffect(() => setHeight(requiredHeight), [width, requiredHeight]);

  return height;
};
