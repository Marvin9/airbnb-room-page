import React from 'react';
import { Flex } from 'rebass';

import { PropertyReviewProps } from '../../types';
import { Chunk } from './components/Chunk';

export const PropertyReview: React.FC<PropertyReviewProps> = (propertyReviews) => (
  <Flex flexWrap="wrap" alignItems="center">
    {Object.keys(propertyReviews).map((chunk) => (
      <Chunk
        chunkName={chunk}
        chunkValue={propertyReviews[chunk]}
      />
    ))}
  </Flex>
);
