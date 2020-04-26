import React from 'react';
import { Box, Text } from 'rebass';

import { LocationProps } from './types';
import { colors, Identity } from '../../../../shared';
import { Divider, Heading, ReadMore, TextWithBreakLines } from '../../../../shared/components';

export const Location: React.FC<LocationProps & Identity> = ({
  id,
  locationName,
  locationDetail,
  readMore,
}) => (
  <Box id={id}>
    <Divider />

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
  </Box>
);
