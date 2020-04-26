import React from 'react';
import { Box, Button } from 'rebass';

import { Divider } from '../../../../shared/components';
import { colors, Identity } from '../../../../shared';
import { HostDetailsProps } from './types';
import { Header } from './components/Header';
import { Details } from './components/Details';

export const HostDetails: React.FC<HostDetailsProps & Identity> = ({
  id,
  hostName,
  hostDetails,
  profilePic,
  details,
  hostReviews,
  verified,
  interactionWithGuests,
}) => (
  <Box id={id}>
    <Divider />

    <Header
      hostName={hostName}
      hostDetails={hostDetails}
      profilePic={profilePic}
      hostReviews={hostReviews}
      verified={verified}
    />
    <br />
    <Details
      details={details}
      interactionWithGuests={interactionWithGuests}
    />
    <Button variant="outline" my={3} color={colors.blue}>
      Contact Host
    </Button>
  </Box>
);
