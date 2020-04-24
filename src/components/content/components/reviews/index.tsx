import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

import { ReviewsProps, UserReviewProps } from './types';
import { colors, smoothScrollToRef } from '../../../../shared';
import { Heading, Divider } from '../../../../shared/components';

import { IconWrapper } from './components/IconWrapper';
import { Overall } from './components/Overall';
import { PropertyReview } from './components/PropertyReview';
import { UserReviews } from './components/UserReviews';

export const Reviews: React.FC<ReviewsProps> = ({
  stars,
  numberOfReviews,
  propertyReviews,
  userReviews,
  perPage = 7,
}) => {
  const totalPage = Math.ceil(userReviews.length / perPage);
  const reviewsRef: any = React.createRef();

  const [currentPage, changePage] = useState(1);

  const decidePageItems = (): UserReviewProps[] => (
    [...userReviews.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage,
    )]);

  const incrementPage = (): void => {
    if (currentPage < totalPage) {
      changePage(currentPage + 1);
      smoothScrollToRef(reviewsRef);
    }
  };

  const decrementPage = (): void => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
      smoothScrollToRef(reviewsRef);
    }
  };

  return (
    <>
      <Heading>
        Reviews
      </Heading>

      <Overall stars={stars} numberOfReviews={numberOfReviews} />

      <Divider margin="20px 0" />

      <PropertyReview {...propertyReviews} />

      <Box ref={reviewsRef}>
        <UserReviews userReviews={decidePageItems()} />
      </Box>

      {/* PAGINATION */}
      <Flex alignItems="center" justifyContent="center">
        <IconWrapper
          onClick={(): void => decrementPage()}
        >
          <MdArrowBack />
        </IconWrapper>
        <Text color={colors.modernBlack}>
          {currentPage}
          &nbsp;/&nbsp;
          {totalPage}
        </Text>
        <IconWrapper
          onClick={(): void => incrementPage()}
        >
          <MdArrowForward />
        </IconWrapper>
      </Flex>

      <br />
    </>
  );
};
