import React from 'react';

import { ListItem } from './component/ListItem';
import { FeaturesProps } from './types';

export const Features: React.FC<FeaturesProps> = ({ items }) => (
  <>
    {items.map((item) => <ListItem {...item} />)}
  </>
);
