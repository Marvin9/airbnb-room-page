export type PropertyReview = {
  location: number;
  value: number;
  communication: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
};

export type UserReview = {
  username: string;
  profilePicture: string;
  date: string;
  review: string;
};

export interface OverallProps {
  stars: number;
  numberOfReviews: number;
}

export interface ReviewsProps extends OverallProps {
  propertyReviews: PropertyReview[];
  userReviews: UserReview[];
}
