import React, { useEffect, useRef, useState } from 'react';
import * as faceApi from 'face-api.js';
import styled from 'styled-components';

import { PrimaryButton } from './button';

const Text = styled.h3`
  text-align: left;
  color: ${(props) => props.color};
  margin-top: 30px;
`;

// usage: Gotta use use-react-screenshot before calling this component, which is already installed in dependencies
// import { useScreenshot } from 'use-react-screenshot'
// const [image, takeScreenshot] = useScreenshot()
// <WebcamCapture
//takeScreenshot={takeScreenshot}
//Image={Image}
//handleSubmit={handleSubmit}/>

export const WebcamCapture = ({ takeScreenshot, Image, handleSubmit }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true); //TODO make spinner
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

  const run = async () => {
    console.log('run started');
    stream = navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', height: 350, width: 350 },
    });

    stream.then(successCallback, errorCallback);
    try {
      await faceApi.nets.tinyFaceDetector.load('/models/');
      videoRef.current.srcObject = await stream;
    } catch (e) {
      console.log(e.name, e.message, e.stack);
    }
  };

  useEffect(() => {
    if (shouldStart) {
      run();
      setShouldStart(false);
    }
  }, [run, shouldStart, setShouldStart, image]);

  const onPlay = async () => {
    if (
      videoRef.current.paused ||
      videoRef.current.ended ||
      !faceApi.nets.tinyFaceDetector.params
    ) {
      // setTimeout(() => onPlay());
      return;
    }
    setPlaying(true);
    setShowText(true);
    setShowSpinner(false);
    const options = new faceApi.TinyFaceDetectorOptions({
      inputSize: 512,
      scoreThreshold: 0.5,
    });

    const result = await faceApi.detectSingleFace(videoRef.current, options);

    if (result) {
      setShowText(false);
      takeScreenshot(videoRef.current);
      console.log('detected');
      videoRef.current.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
        console.log('stopped');
      });

      await setPlaying(false);
      await setImage(true);
      await setShouldStart(false);
    }

    setTimeout(() => onPlay(), 1000);
  };

  return (
    <div
      className={'camera-box'}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {!image ? (
        <div className={'camera-container'}>
          {showText && (
            <Text color="red">
              {' '}
              Please look at the camera and move you head up and down to take a
              picture{' '}
            </Text>
          )}
          <video
            ref={videoRef}
            autoPlay
            muted
            onPlay={onPlay}
            style={{
              width: '350px !important',
              height: '350px !important',
            }}
          />
        </div>
      ) : null}
      {image && <img src={Image} alt={''} width={350} height={350} />}
      {image ? (
        <div>
          <PrimaryButton
            handleClick={() => {
              setImage(false);
              setShouldStart(true);
              setShowSpinner(true);
            }}
            buttonText={'Re-Take Photo'}
          />
          <PrimaryButton handleClick={handleSubmit} buttonText={'Submit'} />
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
