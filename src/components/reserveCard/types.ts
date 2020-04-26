export type guestsType = {
  adults?: number;
  children?: number;
  infants?: number;
};

export interface InputProps {
  guests: guestsType;
  guestsDispatcher: React.Dispatch<any>;
  maxGuests: number;
}

export interface ReserveCardProps {
  price: {
    currentPrice: number;
    previousPrice?: number;
  };
  maxGuests: number;
  guests?: guestsType;
  review?: number;
  totalReviews?: number;
  calculateTotalPrice(guests: guestsType): number;
}
