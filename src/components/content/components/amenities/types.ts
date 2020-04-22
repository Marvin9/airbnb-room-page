import { IconBaseProps } from 'react-icons';

export type amenities = {
  title: string;
  Icon: React.FC<IconBaseProps>;
};

export interface AmenitiesProps {
  amenities: amenities[];
}
