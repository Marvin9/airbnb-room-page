import React from 'react';

import { ReviewsProps } from './types';
import { Heading, Divider } from '../../../../shared/components';
import { Overall } from './components/Overall';
import { PropertyReview } from './components/PropertyReview';
import { UserReviews } from './components/UserReviews';

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

    <Overall stars={stars} numberOfReviews={numberOfReviews} />

    <Divider margin="20px 0" />

    <PropertyReview {...propertyReviews} />

    <UserReviews userReviews={userReviews} />
  </>
);
