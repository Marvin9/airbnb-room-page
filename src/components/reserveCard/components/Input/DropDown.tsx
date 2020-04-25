import React from 'react';
import { Card } from 'rebass';

import { InputProps } from '../../types';

import { SmallText } from '../SmallText';
import { DropDownItem } from './DropDownItem';

export const DropDown: React.FC<InputProps> = ({ guests, guestsDispatcher, maxGuests }) => (
  <Card pt={3} px={2} sx={{ boxSizing: 'unset' }}>
    <DropDownItem
      title="Adults"
      number={guests.adults ?? 0}
      dispatcher={guestsDispatcher}
      actionName="ADULT"
      maxGuests={maxGuests}
    />
    <DropDownItem
      title="Children"
      tagline="Ages 2-12"
      number={guests.children ?? 0}
      dispatcher={guestsDispatcher}
      actionName="CHILDREN"
      maxGuests={maxGuests}
    />
    <DropDownItem
      title="Infants"
      tagline="Under 2"
      number={guests.infants ?? 0}
      dispatcher={guestsDispatcher}
      actionName="INFANTS"
      maxGuests={maxGuests}
    />
    <SmallText>
      {maxGuests}
      {' '}
      guests maximum, Infants don&apos;t count toward the number of guests
    </SmallText>
  </Card>
);
