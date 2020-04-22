import React from 'react';
import { Box } from 'rebass';

import {
  ImageGrid,
  Content,
} from './components';

export const App: React.FC = () => (
  <>
    <ImageGrid />

    <Box
      sx={{
        maxWidth: 650,
        mx: 'auto',
        py: 30,
      }}
      my="auto"
    >
      <Content />
    </Box>
  </>
);
