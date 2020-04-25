import React from 'react';
import { Text } from 'rebass';

import { colors } from '../../../shared';

interface SmallTextProps {
  [rest: string]: any;
}

export const SmallText: React.FC<SmallTextProps> = ({
  children,
  ...rest
}) => (
  <Text
    display="inline"
    fontSize={1}
    color={colors.modernBlack}
    {...rest}
  >
    {children}
  </Text>
);
