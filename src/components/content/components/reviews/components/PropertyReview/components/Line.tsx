import React from 'react';
import { Box, SxStyleProp } from 'rebass';

import { reviewLineWidth, colors } from '../../../../../../../shared';

interface LineProps {
  review: number;
  [rest: string]: any;
}

const calculateWidth = (review): number => (
  ((review * 100) / 500) * reviewLineWidth
);

const LBox: SxStyleProp = {
  height: '5px',
  borderRadius: '10px',
};

export const Line: React.FC<LineProps> = ({ review, ...rest }) => (
  <Box
    sx={{
      width: `${reviewLineWidth}rem`,
      position: 'relative',
      ...LBox,
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        width: `${calculateWidth(review)}rem`,
        background: colors.blue,
        ...LBox,
      },
    }}
    bg={colors.light}
    {...rest}
  />
);
