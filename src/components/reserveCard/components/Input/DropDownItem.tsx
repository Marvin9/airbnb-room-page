import React from 'react';
import { Flex } from 'rebass';

import { colors } from '../../../../shared';
import { IconWrapper, MediumHeading } from '../../../../shared/components';

import { SmallText } from '../SmallText';

interface DropDownItemProps {
  title: string;
  tagline?: string;
  number: number;
  dispatcher: React.Dispatch<any>;
  actionName: string;
  maxGuests: number;
}

const DDIconWrapper = {
  sx: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    border: `1px solid ${colors.blue}`,
    cursor: 'pointer',
  },
  bg: 'none',
  color: colors.blue,
  p: 0,
  justifyContent: 'center',
  alignItems: 'center',
};

export const DropDownItem: React.FC<DropDownItemProps> = ({
  title,
  tagline,
  number,
  dispatcher,
  actionName,
  maxGuests,
}) => (
  <Flex alignItems="center" mb={4}>
    <MediumHeading m={0} ml={2}>
      {title}
      {!!tagline && (
        <SmallText display="block" fontWeight="lighter" color={colors.greyish2}>
          {tagline}
        </SmallText>
      )}
    </MediumHeading>

    <Flex ml="auto" alignItems="center">
      <IconWrapper
        onClick={(): void => dispatcher({ type: `DECREMENT_${actionName}`, maxGuests })}
        {...DDIconWrapper}
      >
        -
      </IconWrapper>
      <MediumHeading m={0}>{number}</MediumHeading>
      <IconWrapper
        onClick={(): void => dispatcher({ type: `INCREMENT_${actionName}`, maxGuests })}
        {...DDIconWrapper}
      >
        +
      </IconWrapper>
    </Flex>
  </Flex>
);
