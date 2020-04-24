import React from 'react';
import { Flex } from 'rebass';

import { colors } from '../../../../../shared';

type IconProps = {
  onClick: Function;
};

export const IconWrapper: React.FC<IconProps> = ({ children, onClick }) => (
  <Flex
    bg={colors.blue}
    color="white"
    p={2}
    mx={3}
    sx={{
      cursor: 'pointer',
      transition: '0.5s',
      '&:hover': {
        opacity: 0.8,
      },
    }}
    onClick={(e): void => onClick(e)}
  >
    {children}
  </Flex>
);
