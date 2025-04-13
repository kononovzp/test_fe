import React from 'react';
import { CircularProgress, useTheme } from '@mui/material';

interface LoaderProps {
  size?: number;
}

const CircularLoader: React.FC<LoaderProps> = ({ size = 30 }) => {
  const theme = useTheme();

  return <CircularProgress size={size} sx={{ color: theme.palette.primary[100] }} />;
};

export default CircularLoader;
