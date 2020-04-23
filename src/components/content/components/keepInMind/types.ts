import { IconBaseProps } from 'react-icons';

export type HouseRulesProps = {
  title: string;
  Icon: React.FC<IconBaseProps>;
};

export type CancellationProps = {
  title?: string;
  description: string;
};

export interface KeepInMindProps {
  checkIn: string;
  checkOut: string;
  additionalDetail?: string;
  houseRules: HouseRulesProps[];
  acknowladge?: HouseRulesProps[];
  additionalRules?: string;
  cancellation: CancellationProps;
}
