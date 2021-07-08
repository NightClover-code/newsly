import { useMemo, useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  return {
    handleResize: useMemo(
      () => () => {
        const callback = () => {
          setCounter(0);
        };

        window.addEventListener('resize', callback);

        return () => window.removeEventListener('resize', callback);
      },
      [setCounter]
    ),
    counter,
    setCounter,
  };
};
