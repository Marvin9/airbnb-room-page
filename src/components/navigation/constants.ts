import { uniqueIds } from '../content/constants';

export type linkType = {
  name: string;
  reference: string;
};

export const links: linkType[] = [
  {
    name: 'Overview',
    reference: uniqueIds.Header,
  },
  {
    name: 'Reviews',
    reference: uniqueIds.Reviews,
  },
  {
    name: 'The host',
    reference: uniqueIds.HostDetails,
  },
  {
    name: 'Location',
    reference: uniqueIds.Location,
  },
  {
    name: 'Policies',
    reference: uniqueIds.KeepInMind,
  },
];
