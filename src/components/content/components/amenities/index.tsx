import React from 'react';
import { Flex, Text } from 'rebass';

import { AmenitiesProps } from './types';
import { LinkText, MediumHeading } from '../../../../shared/components';

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => (
  <>
    <MediumHeading>
      Amenities
    </MediumHeading>

    <Flex flexWrap="wrap">
      {amenities.map(({ title, Icon }) => (
        <Flex width={1 / 2} my={3}>
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
  </>
);
