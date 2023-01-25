import React from 'react';
import styled, { keyframes } from 'styled-components';

import LoopIcon from '@mui/icons-material/Loop';

const spin = keyframes`
  from {
    transform:rotate(360deg);
  }

  to {
    transform:rotate(0deg);
  }
`;
const Icon = styled.div`
  width: 80px;
  height: 80px;
  animation-name: ${spin};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

function LoadingIcon() {
  return (
    <Icon>
      <LoopIcon sx={{ fontSize: '80px', color: '#a39191' }} />
    </Icon>
  );
}

export default LoadingIcon;
