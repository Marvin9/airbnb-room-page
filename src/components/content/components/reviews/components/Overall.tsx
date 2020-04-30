import React from 'react';
import { Flex, Text } from 'rebass';
import { Input } from '@rebass/forms';
import { FaStar } from 'react-icons/fa';

import { colors } from '../../../../../shared';
import { MediumHeading } from '../../../../../shared/components';
import { OverallProps } from '../types';

export const Overall: React.FC<OverallProps> = ({
  stars,
  numberOfReviews,
}) => (
  <Flex alignItems={['flex-start', 'center']} flexDirection={['column', 'row']}>
    <Flex justifyContent={['flex-start', 'center']}>
      <MediumHeading
        my={0}
        mr={20}
        pr={20}
        sx={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)' }}
      >
        <FaStar style={{ marginRight: 10, color: colors.blue }} />
        {stars}
      </MediumHeading>
      <Text>
        <b>{numberOfReviews}</b>
        {' '}
        &nbsp;
        <span style={{ color: colors.greyish2 }}>Reviews</span>
      </Text>
    </Flex>

    <Flex ml={[0, 'auto']} mt={[2, 0]}>
      <Input placeholder="Search reviews" sx={{ color: colors.greyish }} />
    </Flex>
  </Flex>
);
