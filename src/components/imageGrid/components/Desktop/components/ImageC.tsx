import React from 'react';
import {
  Image,
  SxStyleProp,
} from 'rebass';

const largeImage = {
  width: 900,
  maxHeight: 300,
};

const mediumImage = {
  maxWidth: 300,
  height: 150,
};

const imageStyle: SxStyleProp = {
  border: '1px solid rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
  transition: '0.5s',
  '&:hover': {
    transform: 'scale(1.008)',
  },
};

interface ImageCProps {
  src: string;
  big?: boolean;
  [rest: string]: any;
}

export const ImageC: React.FC<ImageCProps> = ({ src, big, ...rest }) => (
  big
    ? <Image src={src} sx={imageStyle} {...largeImage} {...rest} />
    : <Image src={src} sx={imageStyle} {...mediumImage} {...rest} />
);
