export type PropertyReviewProps = {
  location: number;
  value: number;
  communication: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
};

export type UserReviewProps = {
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
  propertyReviews: PropertyReviewProps;
  userReviews: UserReviewProps[];
}
