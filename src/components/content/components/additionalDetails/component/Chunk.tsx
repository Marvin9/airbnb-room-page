import React from 'react';
import shortid from 'shortid';
import { Box, Text } from 'rebass';

import { colors } from '../../../../../shared';
import { MediumHeading } from '../../../../../shared/components';
import { readMore } from '../types';

export const Chunk: React.FC<readMore> = ({
  title,
  description,
}) => (
  <Box my={3}>
    <MediumHeading>
      {title}
    </MediumHeading>
    <Text color={colors.greyish2}>
      {description.split('\n').map((desc) => (
        <React.Fragment key={shortid.generate()}>
          {desc}
          <br />
        </React.Fragment>
      ))}
    </Text>
  </Box>
);
