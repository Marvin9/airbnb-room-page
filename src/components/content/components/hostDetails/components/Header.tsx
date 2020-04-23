import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from 'rebass';
import { FaStar } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

import { colors } from '../../../../../shared';
import { Heading, MediumHeading } from '../../../../../shared/components';
import { HeaderProps } from '../types';

const HIconStyle: React.CSSProperties = {
  color: colors.greyish2,
};

const HTextProps = {
  mr: 4,
  color: colors.modernBlack,
};

export const Header: React.FC<HeaderProps> = ({
  hostName,
  hostDetails,
  hostReviews,
  verified,
  profilePic,
}) => (
  <Flex alignItems="center">
    <Box>
      <Heading m={0}>
        Hosted by
        {' '}
        {hostName}
      </Heading>
      <MediumHeading fontWeight="normal" color={colors.greyish2} m={0}>
        {hostDetails.join(' . ')}
      </MediumHeading>
      {(!!hostReviews || verified) && (
        <Flex alignItems="center" mt={3}>
          {!!hostReviews && (
            <Text {...HTextProps}>
              <FaStar style={HIconStyle} />
              {' '}
              {hostReviews}
              {' '}
              Reviews
            </Text>
          )}

          {verified && (
            <Text {...HTextProps}>
              <MdVerifiedUser style={HIconStyle} />
              {' '}
              Verified
            </Text>
          )}
        </Flex>
      )}
    </Box>
    <Image src={profilePic} variant="avatar" ml="auto" />
  </Flex>
);
