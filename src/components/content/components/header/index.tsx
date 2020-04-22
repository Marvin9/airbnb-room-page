import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from 'rebass';

import { colors, fonts } from '../../../../shared';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  title,
  userProfilePic,
  username,
  location,
  roomDetails,
}) => (
  <Flex alignItems="center">
    <Box width={2 / 3}>
      <Text
        fontSize={fonts.small}
        fontWeight="bold"
        lineHeight={1.01}
        color={colors.modernBlack}
      >
        {title}
      </Text>

      <Text
        color={colors.greyish2}
        mt="10px"
        sx={{
          '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
          },
        }}
      >
        {location}
      </Text>

      {!!roomDetails && (
        <>
          <Text color={colors.greyish2} mt={1}>
            {roomDetails.map((detail) => <span style={{ marginRight: '20px' }}>{detail}</span>)}
          </Text>
        </>
      )}
    </Box>

    <Flex width={1 / 3} flexDirection="column" alignItems="center">
      <Image src={userProfilePic} variant="avatar" />
      <Text color={colors.greyish}>
        {username}
      </Text>
    </Flex>
  </Flex>
);