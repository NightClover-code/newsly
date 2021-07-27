import { useState, useEffect, MutableRefObject } from 'react';
import { useHeight } from './useHeight';

export const useSpans = (
  containerRef: MutableRefObject<HTMLDivElement | null>
) => {
  const [spans, setSpans] = useState(0);
  const height = useHeight(containerRef);

  useEffect(() => setSpans(Math.ceil(height! / 10)), [height]);

  return spans;
};
