import React from 'react';

import { ReviewsProps } from './types';
import { Heading } from '../../../../shared/components';

export const Reviews: React.FC<ReviewsProps> = ({
  stars,
  numberOfReviews,
  propertyReviews,
  userReviews,
}) => (
  <>
    <Heading>
      Reviews
    </Heading>
  </>
);
