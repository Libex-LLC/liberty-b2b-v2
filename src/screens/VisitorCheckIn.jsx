import React from 'react';
import { FormCheckIn } from '../components/FormCheckIn';
import { Box } from '@mantine/core';

export const VisitorCheckIn = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <FormCheckIn />
    </Box>
  );
};
