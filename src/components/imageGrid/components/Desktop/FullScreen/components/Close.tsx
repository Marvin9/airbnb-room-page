import React from 'react';
import { IoIosClose } from 'react-icons/io';

import { colors } from '../../../../../../shared';

const FSClose: React.CSSProperties = {
  fontSize: 60,
  cursor: 'pointer',
  color: colors.greyish,
  marginRight: 30,
  marginTop: 20,
};

export const Close: React.FC<{ onClick: Function }> = ({ onClick }) => (
  <IoIosClose style={FSClose} onClick={(): void => onClick()} />
);
