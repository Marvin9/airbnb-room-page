import React from 'react';

import { Divider } from '../../../../../../shared/components';
import { UserReviewProps } from '../../types';
import { Review } from './component/Review';

type UserReviewsProps = {
  userReviews: UserReviewProps[];
};

export const UserReviews: React.FC<UserReviewsProps> = ({ userReviews }) => (
  <>
    {userReviews.map((review) => (
      <>
        <Review {...review} />
        <Divider />
      </>
    ))}
  </>
);
