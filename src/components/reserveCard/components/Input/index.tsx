import React, { useState, CSSProperties } from 'react';
import { Flex } from 'rebass';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { colors } from '../../../../shared';
import { MediumHeading } from '../../../../shared/components';
import { InputProps } from '../../types';

import { DropDown } from './DropDown';

const RightIcon: CSSProperties = {
  marginLeft: 'auto',
  color: colors.modernBlack,
};

export const Input: React.FC<InputProps> = ({ guests, guestsDispatcher, maxGuests }) => {
  const totalGuests = (guests.adults ?? 0) + (guests.children ?? 0);
  const infants = guests.infants ?? 0;

  const [dropDownOpen, dropDownControl] = useState(false);

  const toggleDropDown = (): void => dropDownControl(!dropDownOpen);

  return (
    <>
      <Flex
        py={2}
        px={3}
        sx={{
          border: `1px solid ${colors.light}`,
          cursor: 'pointer',
        }}
        alignItems="center"
        onClick={(): void => toggleDropDown()}
      >
        <MediumHeading m={0} fontWeight="normal">
          {totalGuests}
          guest
          {totalGuests > 1 ? 's' : ''}
          {' '}
          {' '}
          {infants > 0 && (
            <>
              ,
              {infants}
              infant
              {infants > 1 ? 's' : ''}
            </>
          )}
        </MediumHeading>

        {!dropDownOpen && <FaArrowDown style={RightIcon} />}
        {dropDownOpen && <FaArrowUp style={RightIcon} />}
      </Flex>

      {dropDownOpen
        && <DropDown guests={guests} guestsDispatcher={guestsDispatcher} maxGuests={maxGuests} />}
    </>
  );
};
