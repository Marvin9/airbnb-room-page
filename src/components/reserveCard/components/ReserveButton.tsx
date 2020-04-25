import React from 'react';
import { Box } from 'rebass';

import { colors } from '../../../shared';

export const ReserveButton: React.FC = ({ children, ...rest }) => (
  <Box
    bg={colors.red}
    color="white"
    mt={3}
    py={3}
    sx={{
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      '&:hover': {
        background: colors.redDark,
      },
    }}
    {...rest}
  >
    {children}
  </Box>
);
