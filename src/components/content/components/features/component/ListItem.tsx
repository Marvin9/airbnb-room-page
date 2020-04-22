import React from 'react';
import { Box, Flex, Text } from 'rebass';

import { itemType } from '../types';
import { colors } from '../../../../../shared';

const LIIcon: React.CSSProperties = {
  marginRight: 10,
  marginTop: 5,
  color: colors.modernBlack,
};

export const ListItem: React.FC<itemType> = ({
  title,
  description,
  Icon,
}) => (
  <Flex my={3}>
    <Icon style={LIIcon} />
    <Box>
      <Text fontWeight="bold" fontSize={2} color={colors.modernBlack}>
        {title}
      </Text>
      <Text fontSize={1} color={colors.greyish2}>
        {description}
      </Text>
    </Box>
  </Flex>
);
