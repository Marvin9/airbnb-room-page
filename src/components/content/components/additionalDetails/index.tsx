import React from 'react';
import { Text } from 'rebass';

import { Chunk } from './component/Chunk';
import { colors } from '../../../../shared';
import { ReadMore } from '../../../../shared/components';
import { AdditionalDetailsProps } from './types';

export const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  description,
  readMore,
}) => (
  <>
    <Text color={colors.greyish2}>
      {description}
    </Text>

    <ReadMore>
      {readMore.map((chunk) => <Chunk key={chunk.title} {...chunk} />)}
    </ReadMore>
  </>
);
