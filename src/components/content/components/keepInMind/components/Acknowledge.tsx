import React from 'react';
import { Box, Flex } from 'rebass';

import { MediumHeading } from '../../../../../shared/components';
import { HouseRulesProps } from '../types';

import { IconC } from './IconC';

export const Acknowledge: React.FC<{ additonal: HouseRulesProps[] }> = ({
  additonal,
}) => (
  <>
    <MediumHeading>
      You must also acknowledge
    </MediumHeading>
    <Box my={4}>
      {additonal.map((rule) => (
        <Flex my={3}>
          <IconC Icon={rule.Icon} />
          {rule.title}
        </Flex>
      ))}
    </Box>
  </>
);
