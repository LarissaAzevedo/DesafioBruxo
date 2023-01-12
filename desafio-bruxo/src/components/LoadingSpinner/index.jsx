import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex', color: 'grey.500' }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}