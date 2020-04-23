import React from 'react';
import { Text } from 'rebass';

import { colors } from './index';

interface RestProp {
  [rest: string]: any;
}

export const Divider: React.FC<RestProp> = ({ margin, ...all }) => (
  <hr
    style={{
      background: colors.greyish,
      opacity: 0.2,
      margin: margin ?? '30px 0',
    }}
    {...all}
  />
);

export const Heading: React.FC<RestProp> = ({ children, ...rest }) => (
  <Text fontSize={4} fontWeight="bold" my={3} color={colors.modernBlack} {...rest}>
    {children}
  </Text>
);

export const LinkText: React.FC<RestProp> = ({ children, ...rest }) => (
  <Text
    color={colors.blue}
    sx={{ textDecoration: 'underline', cursor: 'pointer' }}
    my={2}
    fontWeight="bold"
    {...rest}
  >
    {children}
  </Text>
);

export const MediumHeading: React.FC<RestProp> = ({ children, ...rest }) => (
  <Text fontSize={2} fontWeight="bold" my={3} color={colors.modernBlack} {...rest}>
    {children}
  </Text>
);
