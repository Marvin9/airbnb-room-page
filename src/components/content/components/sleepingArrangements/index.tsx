import React from 'react';
import { Card, Text } from 'rebass';

import { SleepingArrangementProps } from './types';
import { MediumHeading } from '../../../../shared/components';
import { colors } from '../../../../shared';

export const SleepingArrangements: React.FC<SleepingArrangementProps> = ({
  title,
  description,
  Icon,
}) => (
  <>
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
  </>
);
