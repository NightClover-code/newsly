import { useMemo, useState } from 'react';

export const useResponsiveNum = () => {
  const [responsiveNum, setResponsiveNum] = useState(2);

  return {
    handleResponsiveNum: useMemo(
      () => (width: number | null) => {
        if (width) {
          if (width > 970) setResponsiveNum(2);
          else if (670 < width && width < 970) setResponsiveNum(4);
          else if (400 < width && width < 670) setResponsiveNum(5);
          else if (width < 400) setResponsiveNum(6);
        }
      },
      [responsiveNum]
    ),
    responsiveNum,
  };
};
