import React from 'react';
import { IconBaseProps } from 'react-icons';

import { colors } from '../../../../../shared';

type IconCProps = {
  Icon: React.FC<IconBaseProps>;
};

export const IconC: React.FC<IconCProps> = ({ Icon }) => (
  <Icon
    style={{
      color: colors.modernBlack,
      marginRight: 20,
      fontSize: 25,
    }}
  />
);
