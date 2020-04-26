import React from 'react';
import { Box, Text } from 'rebass';

import { KeepInMindProps } from './types';
import { colors, Identity } from '../../../../shared';
import {
  Divider,
  Heading,
  MediumHeading,
  ReadMore,
} from '../../../../shared/components';

import { HouseRules } from './components/HouseRules';
import { Acknowledge } from './components/Acknowledge';
import { Cancellation } from './components/Cancellation';

export const KeepInMind: React.FC<KeepInMindProps & Identity> = ({
  id,
  checkIn,
  checkOut,
  additionalDetail,
  houseRules,
  acknowladge,
  additionalRules,
  cancellation,
}) => (
  <Box id={id}>
    <Divider />

    <Heading>
      Things to keep in mind
    </Heading>

    <Text color={colors.modernBlack}>
      <b>Check-in: </b>
      {checkIn}
    </Text>
    <Text color={colors.modernBlack}>
      <b>Check-out: </b>
      {checkOut}
    </Text>
    <br />
    {additionalDetail}

    <Divider />

    <HouseRules houseRules={houseRules} />

    <br />

    {(!!acknowladge || !!additionalRules) && (
      <ReadMore>
        {!!acknowladge && <Acknowledge additonal={acknowladge} />}

        {!!additionalRules && (
          <>
            <MediumHeading>
              Additional rules
            </MediumHeading>
            {additionalRules}
          </>
        )}
      </ReadMore>
    )}

    <Divider />

    <Cancellation {...cancellation} />
  </Box>
);
