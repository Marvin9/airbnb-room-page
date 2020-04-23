import React from 'react';
import { Text } from 'rebass';

import { colors } from '../../../../../shared';
import { ExpandableBox, MediumHeading } from '../../../../../shared/components';
import { DetailsProps } from '../types';

const Bold: React.FC = ({ children }) => (
  <Text color={colors.modernBlack} fontWeight="bold" display="inline">
    {children}
  </Text>
);

export const Details: React.FC<DetailsProps> = ({
  details,
  interactionWithGuests,
}) => (
  <>
    <ExpandableBox maxChar={200} color={colors.greyish2}>
      {details}
    </ExpandableBox>

    {!!interactionWithGuests && (
      <>
        <MediumHeading mb={0}>
          Interaction with guests
        </MediumHeading>
        <Text>
          {interactionWithGuests.title}
          <br />
          <br />

          Languages
          {' '}
          :
          &nbsp;&nbsp;
          <Bold>
            {interactionWithGuests.languages.join(', ')}
          </Bold>
          <br />

          Response rate
          {' '}
          :
          &nbsp;&nbsp;
          <Bold>
            {interactionWithGuests.responseRate}
          </Bold>
          <br />

          Response time
          {' '}
          :
          &nbsp;&nbsp;
          <Bold>
            {interactionWithGuests.responseTime}
          </Bold>
        </Text>
      </>
    )}
  </>
);
