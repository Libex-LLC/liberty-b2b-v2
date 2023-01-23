import React from 'react';
import styled, { keyframes } from 'styled-components';

//icons
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
  left: -210px;
  top: 74px;
  ${(props) => (props.out ? `display: none;` : `display: inline-block;`)}
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear infinite;
`;

function PrintingIcon() {
  return (
    <div
      style={{
        marginLeft: '7.5rem',
        width: '400px !important',
        height: '400px !important',
      }}
    >
      <LocalPrintshopIcon sx={{ fontSize: '300px', color: '#9d948f' }} />
      <Fade>
        <ReceiptIcon sx={{ fontSize: '120px', color: '#a9a9a9' }} />
      </Fade>
    </div>
  );
}

export default PrintingIcon;
