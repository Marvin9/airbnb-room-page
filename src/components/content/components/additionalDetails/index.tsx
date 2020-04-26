import React from 'react';
import shortid from 'shortid';
import { Box, Text } from 'rebass';

import { Chunk } from './component/Chunk';
import { colors, Identity } from '../../../../shared';
import { ReadMore } from '../../../../shared/components';
import { AdditionalDetailsProps } from './types';

export const AdditionalDetails: React.FC<AdditionalDetailsProps & Identity> = ({
  id,
  description,
  readMore,
}) => (
  <Box id={id}>
    <Text color={colors.greyish2}>
      {description}
    </Text>

    <ReadMore>
      {readMore.map((chunk) => <Chunk key={shortid.generate()} {...chunk} />)}
    </ReadMore>
  </Box>
);
