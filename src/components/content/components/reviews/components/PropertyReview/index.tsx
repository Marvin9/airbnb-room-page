import React from 'react';
import shortid from 'shortid';
import { Flex } from 'rebass';

import { PropertyReviewProps } from '../../types';
import { Chunk } from './components/Chunk';

export const PropertyReview: React.FC<PropertyReviewProps> = (propertyReviews) => (
  <Flex flexWrap="wrap" alignItems="center">
    {Object.keys(propertyReviews).map((chunk) => (
      <Chunk
        key={shortid.generate()}
        chunkName={chunk}
        chunkValue={propertyReviews[chunk]}
      />
    ))}
  </Flex>
);
