import React, { useState } from 'react';
import {
  Box,
  Flex,
} from 'rebass';

import { FullScreen } from './FullScreen';
import { imageSource } from '../../constants';
import { ImageC } from './components/ImageC';
import { ButtonC } from './components/ButtonC';
import { breakPoints, header } from '../../../../shared';

export const DesktopGrid: React.FC = () => {
  // full screen with initial image
  const [fullScreen, changeToFullScreen] = useState(-1);

  const openFullScreen = (initialImage): void => changeToFullScreen(initialImage);
  const closeFullScreen = (): void => changeToFullScreen(-1);

  if (fullScreen !== -1) {
    return <FullScreen selectedImage={fullScreen} closeFullScreen={closeFullScreen} />;
  }

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', ...header }}>
      <Flex justifyContent="center">
        <ImageC src={imageSource[0]} big onClick={(): void => openFullScreen(0)} />
        <Flex flexDirection="column">
          <ImageC src={imageSource[1]} onClick={(): void => openFullScreen(1)} />
          <ImageC src={imageSource[2]} onClick={(): void => openFullScreen(2)} />
        </Flex>

        { window.innerWidth > breakPoints[1] && (
          <Flex flexDirection="column">
            <ImageC src={imageSource[3]} onClick={(): void => openFullScreen(3)} />
            <ImageC src={imageSource[4]} onClick={(): void => openFullScreen(4)} />
          </Flex>
        )}
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="space-around"
        sx={{ position: 'absolute', right: 0, top: 0 }}
        height="100%"
        mr={20}
      >
        <Box mb="auto" mt={30}>
          <ButtonC>
            Show Photos
          </ButtonC>
        </Box>
        <Box mb={30}>
          <ButtonC onClick={(): void => openFullScreen(0)}>
            Show Photos
          </ButtonC>
        </Box>
      </Flex>
    </Box>
  );
};
