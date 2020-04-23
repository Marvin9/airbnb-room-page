import React from 'react';
import { Text } from 'rebass';

import { LocationProps } from './types';
import { colors } from '../../../../shared';
import { Heading, ReadMore, TextWithBreakLines } from '../../../../shared/components';

export const Location: React.FC<LocationProps> = ({
  locationName,
  locationDetail,
  readMore,
}) => (
  <>
    <Heading>
      {locationName}
    </Heading>
    {locationDetail && <TextWithBreakLines>{locationDetail}</TextWithBreakLines>}
    {!!readMore && (
      <ReadMore showLabel="Read more about neighbourhood">
        <br />
        <Text fontWeight="bold" color={colors.modernBlack}>Getting around</Text>
        <br />
        <TextWithBreakLines>
          {readMore}
        </TextWithBreakLines>
      </ReadMore>
    )}
  </>
);
