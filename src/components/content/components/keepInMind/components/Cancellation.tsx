import React from 'react';
import { Text } from 'rebass';

import { colors } from '../../../../../shared';
import { MediumHeading } from '../../../../../shared/components';
import { CancellationProps } from '../types';

export const Cancellation: React.FC<CancellationProps> = ({
  title,
  description,
}) => (
  <>
    <MediumHeading>
      Cancellations
    </MediumHeading>
    {!!title && (
      <Text color={colors.modernBlack}>
        <b>
          {title}
        </b>
      </Text>
    )}
    <Text color={colors.modernBlack}>
      {description}
    </Text>
  </>
);
