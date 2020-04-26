import React from 'react';
import { SxStyleProp } from 'rebass';

export interface Identity {
  id: string;
}

export const header: SxStyleProp = { marginTop: 50 };

export const fonts = {
  small: 30,
  medium: 50,
  large: 60,
};

export const breakPoints: number[] = [
  700,
  768,
  1024,
];

export const colors = {
  greyish: '#888DAB',
  greyish2: '#272844',
  modernBlack: '#484848',
  blue: '#0F8BA3',
  light: 'rgba(0, 0, 0, 0.1)',
  red: '#F8585E',
  redDark: '#ff545b',
};

export const contentMaxWidth = 1024;

export const reviewLineWidth = 5;

export const smoothScrollToRef = (ref: React.RefObject<HTMLElement>): void => {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }
};
