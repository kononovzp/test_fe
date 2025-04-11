import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import React from 'react';

interface ILabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: ILabelProps) => {
  const { palette } = useTheme();

  return (
    <Typography
      variant="subheader2"
      sx={{
        mb: 1,
        color: palette.common.white,
      }}
    >
      {children}
    </Typography>
  );
};

export default Label;
