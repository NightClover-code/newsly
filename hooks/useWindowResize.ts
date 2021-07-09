import { WindowContext } from '../context';
import { useContext, useMemo } from 'react';

export const useWindowResize = () => {
  const { setWidth } = useContext(WindowContext);

  return {
    handleWindowResize: useMemo(
      () => () => {
        setWidth(window.innerWidth);

        const handleResize = () => {
          setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
      },
      [setWidth]
    ),
  };
};
