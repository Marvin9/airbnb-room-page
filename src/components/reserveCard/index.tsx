import React, { useEffect, useReducer, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Label } from '@rebass/forms';
import { Card } from 'rebass';

import { guestsReducer } from './guestsReducer';

import { colors } from '../../shared';
import { Divider, Heading } from '../../shared/components';
import { ReserveCardProps } from './types';

import { SmallText } from './components/SmallText';
import { Input } from './components/Input';
import { ReserveButton } from './components/ReserveButton';

export const ReserveCard: React.FC<ReserveCardProps> = ({
  price,
  maxGuests,
  guests = {
    adults: 1,
    children: 0,
    infants: 0,
  },
  review,
  totalReviews,
  calculateTotalPrice,
}) => {
  const [guestsState, guestsDispatch] = useReducer(guestsReducer, guests);
  const [totalPrice, updateTotalPrice] = useState(price.currentPrice);

  useEffect(() => {
    const total = calculateTotalPrice(guestsState);
    updateTotalPrice(total);
  }, [guestsState]);

  return (
    <Card px={3} py={3} width={1 / 3} ml={3}>
      <Heading m={0}>
        $
        {totalPrice}
        {' '}
        <SmallText>
          per night
        </SmallText>
      </Heading>

      {!!review && (
        <SmallText fontWeight="normal">
          <FaStar style={{ color: colors.blue }} />
          {' '}
          {review}
          {' '}
          <SmallText color={colors.greyish2}>
            (
            {totalReviews ?? 0}
            {' '}
            reviews)
          </SmallText>
        </SmallText>
      )}

      <Divider margin="10px 0" />

      <SmallText fontWeight="bold">
        <Label htmlFor="guestSelect">
          Guests
        </Label>
      </SmallText>

      <Input
        guests={guestsState}
        guestsDispatcher={guestsDispatch}
        maxGuests={maxGuests}
      />

      <ReserveButton>
        Reserve
      </ReserveButton>
    </Card>
  );
};
