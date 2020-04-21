import React from 'react';
import { Flex, Image, SxStyleProp } from 'rebass';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { colors } from '../../../../../../shared';
import { imageSource } from '../../../../constants';

import { CarouselProps } from '../types';

const CCommon: React.CSSProperties = {
  margin: 'auto 100px',
};

const CIcon: React.CSSProperties = {
  fontSize: 50,
  color: colors.greyish2,
  cursor: 'pointer',
};

const CImage: React.CSSProperties = {
  ...CCommon,
  width: '600px',
  height: '400px',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: '1s',
};

const CMain: SxStyleProp = { marginLeft: '80px' };

export const Carousel: React.FC<CarouselProps> = ({
  selectedImage,
  next,
  prev,
}) => (
  <Flex alignItems="center" sx={CMain}>
    <IoIosArrowBack
      style={CIcon}
      onClick={(): void => prev()}
    />

    <Image
      src={imageSource[selectedImage]}
      style={CImage}
      onClick={(): void => next()}
    />

    <IoIosArrowForward style={CIcon} onClick={(): void => next()} />
  </Flex>
);
