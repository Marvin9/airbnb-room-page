import React from 'react';
import { Text, SxStyleProp } from 'rebass';

import { colors } from '../../../shared';

interface LinkProps {
  active?: boolean;
  onClick?: Function;
}

const activeLinkStyle: SxStyleProp = {
  color: colors.modernBlack,
  borderBottom: `3px solid ${colors.modernBlack}`,
};

export const Link: React.FC<LinkProps> = ({ children, onClick, active }) => (
  <Text
    sx={{
      px: 2,
      py: 3,
      mx: 1,
      cursor: 'pointer',
      fontSize: 1,
      fontWeight: 'bold',
      '&:hover': {
        textDecoration: 'underline',
      },
      ...(active ? activeLinkStyle : {}),
    }}
    onClick={(e): void => onClick && onClick(e)}
  >
    {children}
  </Text>
);
