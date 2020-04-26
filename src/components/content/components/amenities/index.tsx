import React from 'react';
import shortid from 'shortid';
import { Box, Flex, Text } from 'rebass';

import { Identity } from '../../../../shared';
import { AmenitiesProps } from './types';
import { LinkText, MediumHeading } from '../../../../shared/components';

export const Amenities: React.FC<AmenitiesProps & Identity> = ({ id, amenities }) => (
  <Box id={id}>
    <MediumHeading>
      Amenities
    </MediumHeading>

    <Flex flexWrap="wrap">
      {amenities.map(({ title, Icon }) => (
        <Flex width={1 / 2} my={3} key={shortid.generate()}>
          <Icon style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          <Text fontWeight="lighter" mx={3}>
            {title}
          </Text>
        </Flex>
      ))}
    </Flex>

    <LinkText>
      Show all amenities
    </LinkText>
  </Box>
);
