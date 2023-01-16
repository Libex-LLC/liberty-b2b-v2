import React from 'react';
import { FormCheckIn } from '../components/FormCheckIn';

export const VisitorCheckIn = () => {
  return (
    <div
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
    </div>
  );
};
