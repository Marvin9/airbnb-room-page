import React from 'react';
import { Button } from 'rebass';

interface ButtonCProps {
  [all: string]: any;
}

export const ButtonC: React.FC<ButtonCProps> = ({
  children,
  ...all
}) => (
  <Button
    {...all}
    bg="#fff"
    color="#000"
    fontWeight="lighter"
    sx={{
      cursor: 'pointer',
    }}
  >
    {children}
  </Button>
);
