import React from 'react';
import shortid from 'shortid';
import { Flex, Text } from 'rebass';

import { MediumHeading } from '../../../../../shared/components';
import { HouseRulesProps } from '../types';
import { colors } from '../../../../../shared';

import { IconC } from './IconC';

export const HouseRules: React.FC<{ houseRules: HouseRulesProps[] }> = ({
  houseRules,
}) => (
  <>
    <MediumHeading>
      House Rules
    </MediumHeading>
    <Flex flexWrap="wrap">
      {houseRules.map((rule) => (
        <Flex
          width={[1, 1 / 2]}
          key={shortid.generate()}
          alignItems="center"
          my={2}
        >
          <IconC Icon={rule.Icon} />
          <Text mx={2} color={colors.greyish2}>{rule.title}</Text>
        </Flex>
      ))}
    </Flex>
  </>
);
