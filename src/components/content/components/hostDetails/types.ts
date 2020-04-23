export type InteractionWithGuestsProps = {
  title: string;
  languages: string[];
  responseRate: string;
  responseTime: string;
};

export interface HeaderProps {
  hostName: string;
  hostDetails: string[];
  hostReviews?: number;
  verified?: boolean;
  profilePic: string;
}

export interface DetailsProps {
  details: string;
  interactionWithGuests?: InteractionWithGuestsProps;
}

export type HostDetailsProps = HeaderProps & DetailsProps;
