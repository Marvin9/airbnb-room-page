import React from 'react';

export interface FullScreenType {
  selectedImage: number;
  closeFullScreen: Function;
}

export type changeCurrentImageType = React.Dispatch<React.SetStateAction<number>>;

export interface CarouselProps {
  selectedImage: number;
  next: Function;
  prev: Function;
}
