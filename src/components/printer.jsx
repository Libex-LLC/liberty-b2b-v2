import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const fadeIn = keyframes`
  from {
    transform: translateY(0rem);
    opacity: 0;
  }

  to {
    transform: translateY(2.1rem);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(2.1rem);
    opacity: 0;
  }

  to {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const Fade = styled.div`
  position: relative;
  left: -135px;
  top: 44px;
  ${(props) => (props.out ? `display: none;` : `display: inline-block;`)}
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear infinite;
`;

function PrintingIcon() {
  return (
    <div
      style={{
        width: '200px !important',
        height: '200px !important',
      }}
    >
      <LocalPrintshopIcon sx={{ fontSize: '200px', color: '#9d948f' }} />
      <Fade>
        <ReceiptIcon sx={{ fontSize: '70px', color: '#a9a9a9' }} />
      </Fade>
    </div>
  );
}

export default PrintingIcon;
