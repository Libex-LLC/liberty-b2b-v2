import React, { useEffect, useRef, useState } from 'react';
import * as faceApi from 'face-api.js';
import styled from 'styled-components';

import { PrimaryButton } from './button';
import LoadingIcon from './LoadingIcon';

const Text = styled.h3`
  text-align: left;
  color: ${(props) => props.color};
  margin-top: 5px;
  font-weight: 700;
  font-size: 20;
`;

// Room needs to be well-lit.
// USAGE: Gotta use use-react-screenshot before calling this component, which is already installed in dependencies
// import { useScreenshot } from 'use-react-screenshot'
// const [image, takeScreenshot] = useScreenshot()
// <WebcamCapture
// takeScreenshot={takeScreenshot}
// Image={Image}
// handleSubmit={handleSubmit}/>

export const WebcamCapture = ({ takeScreenshot, Image }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  const [showText, setShowText] = useState(false);
  const [shouldStart, setShouldStart] = useState(true);
  const [image, setImage] = useState(false);
  const [requestCameraAccess, setRequestCameraAccess] = useState(false);
  let stream;

  const successCallback = function (error) {
    setRequestCameraAccess(false);
  };
  const errorCallback = function (error) {
    if (error.name === 'NotAllowedError') {
      setRequestCameraAccess(true);
    }
  };
  // TODO save models to folder and make them readable for later use..
  const run = async () => {
    shouldStart && console.log('run started');
    stream = navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', height: 350, width: 350 },
    });

    stream.then(successCallback, errorCallback);
    try {
      await faceApi.nets.tinyFaceDetector.load('/models/');
      videoRef.current.srcObject = await stream;
    } catch (e) {
      console.log(e.name, e.message, e.stack); //clear
    }
  };

  useEffect(() => {
    if (shouldStart) {
      run();
      setShouldStart(false);
    }
  }, [run, shouldStart, setShouldStart, image]);

  // If longer wait times are present then set scoreThreshold to lower numbers(not too low becuase it affects efficiency)
  const onPlay = async () => {
    if (!faceApi.nets.tinyFaceDetector.params) {
      //setTimeout(() => onPlay());

      return;
    }
    setShowSpinner(false);
    setPlaying(true);
    setShowText(true);
    const options = new faceApi.TinyFaceDetectorOptions({
      inputSize: 512,
      scoreThreshold: 0.5,
    });

    const result = await faceApi.detectSingleFace(videoRef.current, options);

    if (result) {
      setShowText(false);
      takeScreenshot(videoRef.current);
      console.log('detected'); //clear
      videoRef.current.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
        console.log('stopped'); //clear
      });

      await setPlaying(false);
      await setImage(true);
      await setShouldStart(false);
    }

    setTimeout(() => onPlay(), 500);
  };

  return (
    <div
      style={{
        width: '350px',
        height: 'auto',
        marginBottom: '20px',
      }}
    >
      {!image ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {showSpinner && (
            <div
              style={{
                alignSelf: 'center',
                justifySelf: 'center',
                position: 'absolute',
              }}
            >
              <LoadingIcon />
            </div>
          )}
          <video
            ref={videoRef}
            autoPlay
            muted
            onPlay={onPlay}
            style={{
              boxShadow: '1px 1px 18px gray',
              width: '350px !important',
              height: '350px !important',
            }}
          />
          {showText && (
            <Text color="#634242"> Please look at the camera! </Text>
          )}
        </div>
      ) : null}
      {image && (
        <img
          style={{
            boxShadow: '1px 1px 18px gray',
          }}
          src={Image}
          alt={''}
          width={350}
          height={350}
        />
      )}
      {image ? (
        <div>
          <div
            style={{
              boxShadow: '1px 1px 18px gray',
              width: '350px',
              display: 'flex',
              justifyContent: 'center',
            }}
          ></div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '3px',
            }}
          >
            <PrimaryButton
              handleClick={() => {
                setImage(false);
                setShouldStart(true);
                setShowSpinner(true);
              }}
              buttonText={'Re-Take Photo'}
            />
          </div>
        </div>
      ) : null}
      {requestCameraAccess && (
        <>
          <Text color="red">
            You need to allow camera access on the browser to continue using
            this application
          </Text>
          <Text color="black">
            {' '}
            <span style={{ position: 'absolute', width: '450px' }}>
              Open Chrome. <br />
              <br />
              1. At the top right, click More More and then Settings.
              <br />
              <br />
              2. Click Privacy and security and then Site settings and then
              Camera or Microphone.
              <br />
              <br />
              3. Select the option that you want as your default setting.
              <br />
              <br />
              4. Review your blocked and allowed sites.
              <br />
              <br />
              5. To remove an existing exception or permission: To the right of
              the site, click Delete Delete .<br /> <br />
              6. To allow a site that you have already blocked: Under 'Not
              allowed', select the site's name and change the camera or
              microphone permission to 'Allow'.
            </span>
          </Text>
        </>
      )}
    </div>
  );
};
