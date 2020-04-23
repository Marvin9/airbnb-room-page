import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from 'rebass';

import { colors } from '../../../../../../../shared';
import { MediumHeading } from '../../../../../../../shared/components';
import { UserReviewProps } from '../../../types';

export const Review: React.FC<UserReviewProps> = ({
  username,
  profilePicture,
  date,
  review,
}) => (
  <Box>
    <Flex my={2} alignItems="center">
      <Image src={profilePicture} alt={username} variant="avatar" />
      <MediumHeading m={0} mx={3} fontSize={1}>
        {username}
        <br />
        <span style={{ fontWeight: 'normal', color: colors.greyish }}>
          {date}
        </span>
      </MediumHeading>
    </Flex>
    <Text>
      {review}
    </Text>
  </Box>
);
