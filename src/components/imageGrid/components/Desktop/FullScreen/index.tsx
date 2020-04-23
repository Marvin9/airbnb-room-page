import React, { useState, useEffect } from 'react';
import { Box, Flex, SxStyleProp } from 'rebass';

import { Close } from './components/Close';
import { Carousel } from './components/Carousel';
import { imageSource } from '../../../constants';

import { FullScreenType } from './types';

const FSBox: SxStyleProp = {
  width: '100vw',
  height: '100vh',
};

const FSMailFlex: SxStyleProp = { margin: '50px auto' };

export const FullScreen: React.FC<FullScreenType> = ({ selectedImage, closeFullScreen }) => {
  const [currentImage, changeCurrentImage] = useState(selectedImage);

  const totalImages = imageSource.length;

  const nextImage = (): void => {
    changeCurrentImage((currentImage + 1) % totalImages);
  };

  const prevImage = (): void => (
    changeCurrentImage((currentImage - 1) < 0 ? totalImages - 1 : currentImage - 1)
  );

  const toggleBodyOverflow = (set: 'hidden' | 'visible'): void => {
    const body = document.querySelector('body');
    if (body && body.style) {
      body.style.overflow = set;
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body && body.style) {
      body.style.overflow = 'hidden';
    }
    return (): void => {
      if (body) body.style.overflow = 'visible';
    };
  }, []);

  return (
    <Box sx={FSBox}>

      <Flex justifyContent="flex-end">
        <Close onClick={closeFullScreen} />
      </Flex>

      <Flex justifyContent="space-between" sx={FSMailFlex}>

        <Box width={4 / 5}>
          <Carousel
            selectedImage={currentImage}
            next={nextImage}
            prev={prevImage}
          />
        </Box>

        <Box width={1 / 5}>
          {/* TODO */}
        </Box>
      </Flex>
    </Box>
  );
};
