import React from 'react';
import { Box, SxStyleProp } from 'rebass';

import { header } from '../../../../shared';

const MBox: SxStyleProp = {
  ...header,
};

export const MobileGrid: React.FC = () => (
  <Box sx={MBox}>
    Hello
  </Box>
);
