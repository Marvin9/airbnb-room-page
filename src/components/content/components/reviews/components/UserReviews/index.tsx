import React from 'react';
import shortid from 'shortid';

import { Divider } from '../../../../../../shared/components';
import { UserReviewProps } from '../../types';
import { Review } from './component/Review';

type UserReviewsProps = {
  userReviews: UserReviewProps[];
};

export const UserReviews: React.FC<UserReviewsProps> = ({ userReviews }) => (
  <>
    {userReviews.map((review) => (
      <React.Fragment key={shortid.generate()}>
        <Review {...review} />
        <Divider />
      </React.Fragment>
    ))}
  </>
);
