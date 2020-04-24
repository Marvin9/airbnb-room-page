import React from 'react';
import { Box, Card, Text } from 'rebass';

import { SleepingArrangementProps } from './types';
import { MediumHeading } from '../../../../shared/components';
import { colors, Identity } from '../../../../shared';

export const SleepingArrangements: React.FC<SleepingArrangementProps & Identity> = ({
  id,
  title,
  description,
  Icon,
}) => (
  <Box id={id}>
    <MediumHeading>
      Sleeping arrangements
    </MediumHeading>

    <Card p={20} width={1 / 4}>
      <Icon style={{ fontSize: 20 }} />
      <Text color={colors.greyish2}>
        {title}
      </Text>
      <Text color={colors.greyish2} fontWeight="lighter">
        {description}
      </Text>
    </Card>
  </Box>
);
