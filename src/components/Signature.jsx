import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import { Box, Button, Text } from '@mantine/core';

function Signature() {
  const [pointsArray, setPointsArray] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  let sigPad = useRef({});

  const handleConfirm = () => {
    setPointsArray(sigPad.current.toData());
    setImageURL(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  const clearSignature = () => {
    sigPad.current.clear();
  };

  console.log(pointsArray, imageURL, 'View image');
  return (
    <Box>
      <Box
        sx={{
          boxShadow: '1px 1px 3px gray',
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <SignaturePad
          ref={sigPad}
          penColor="black"
          backgroundColor="#FFFFFF"
          canvasProps={{ width: 700, height: 300, className: 'sigCanvas' }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            fontSize: '20px',
            height: '60px',
            width: '150px',
          }}
          onClick={clearSignature}
          variant="default"
        >
          Clear
        </Button>
        <Text
          sx={{
            fontSize: '20px',
          }}
        >
          Signature
        </Text>
        <Button
          sx={{
            fontSize: '20px',
            height: '60px',
            width: '150px',
          }}
          onClick={handleConfirm}
          variant="default"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Signature;
