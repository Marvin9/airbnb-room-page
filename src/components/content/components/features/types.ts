import React from 'react';
import { IconBaseProps } from 'react-icons';

export type itemType = {
  title: string;
  description: string;
  Icon: React.FC<IconBaseProps>;
};

export interface FeaturesProps {
  items: itemType[];
}
