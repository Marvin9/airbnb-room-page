import React, { useState } from 'react';
import { Text } from 'rebass';

import { Chunk } from './component/Chunk';
import { colors } from '../../../../shared';
import { LinkText } from '../../../../shared/components';
import { AdditionalDetailsProps } from './types';

export const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  description,
  readMore,
}) => {
  const [showReadMore, changeReadMore] = useState(false);

  const toggleReadMore = (): void => changeReadMore(!showReadMore);

  return (
    <>
      <Text color={colors.greyish2}>
        {description}
      </Text>

      {showReadMore && readMore.map((chunk) => <Chunk key={chunk.title} {...chunk} />)}

      <LinkText
        onClick={(): void => toggleReadMore()}
      >
        {showReadMore ? 'Hide' : 'Show more'}
      </LinkText>
    </>
  );
};
