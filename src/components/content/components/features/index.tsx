import React from 'react';
import shortid from 'shortid';
import { Box } from 'rebass';

import { Identity } from '../../../../shared';
import { ListItem } from './component/ListItem';
import { FeaturesProps } from './types';

export const Features: React.FC<FeaturesProps & Identity> = ({ id, items }) => (
  <Box id={id}>
    {items.map((item) => <ListItem key={shortid.generate()} {...item} />)}
  </Box>
);
