import React from 'react';
import { breakPoints } from '../../shared';

import { DesktopGrid } from './components/Desktop';

export const ImageGrid: React.FC = () => (
  window.innerWidth <= breakPoints[0]
    ? <p>Mobile</p>
    : <DesktopGrid />
);
