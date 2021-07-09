import { useContext, useMemo, useState } from 'react';
import { WindowContext } from '../context';

export const useResponsiveNum = () => {
  const [responsiveNum, setResponsiveNum] = useState(2);
  const { width } = useContext(WindowContext);

  return {
    handleResponsiveNum: useMemo(
      () => () => {
        if (width) {
          if (width > 970) setResponsiveNum(2);
          else if (670 < width && width < 970) setResponsiveNum(4);
          else if (400 < width && width < 670) setResponsiveNum(5);
          else if (width < 400) setResponsiveNum(6);
        }
      },
      [width]
    ),
    responsiveNum,
  };
};
