import React from 'react';
import { Flex, Text } from 'rebass';

import { MediumHeading } from '../../../../../../../shared/components';
import { Line } from './Line';

interface ChunkProps {
  chunkName: string;
  chunkValue: number;
}

export const Chunk: React.FC<ChunkProps> = ({ chunkName, chunkValue }) => (
  <Flex width={[1, 1 / 2]} alignItems="center">
    <Text width={1 / 3}>
      {chunkName[0].toUpperCase() + chunkName.slice(1)}
    </Text>

    <Flex ml="auto" alignItems="center" width={1 / 2}>
      <Line review={chunkValue} mr={3} />
      <MediumHeading>
        {chunkValue}
      </MediumHeading>
    </Flex>
  </Flex>
);
