import React, { useState, useRef } from 'react';

//Tools import
import { useScreenshot } from 'use-react-screenshot';
import { useReactToPrint } from 'react-to-print';

//Mantine import

import {
  Stepper,
  Button,
  TextInput,
  Group,
  Box,
  NumberInput,
  Text,
} from '@mantine/core';
//Icons import

import {
  IconMail,
  IconUser,
  IconPhone,
  IconId,
  IconMilitaryRank,
  IconSignature,
  IconCameraPlus,
} from '@tabler/icons';
//Components import

import PrintingIcon from './printer';
import StaffCard from './StaffCard';
import Signature from './Signature';
import { WebcamCapture } from './Webcam';
import { TicketToPrint } from './PrintTemplate';

export const FormCheckIn = () => {
  const [userForm, setUserForm] = useState({
    email: '',
    fullName: '',
    mobile: '',
    idNumber: '',
    staffMember: '',
    reasonForVisit: '',
  });
  //Print, Webcam
  const [Image, takeScreenshot] = useScreenshot();

  const printRef = useRef();
  const print = useReactToPrint({
    content: () => printRef.current,
  });

  //when we get apiEnd clear mockData
  const mockData = [
    { id: 1, staffName: 'Marko', role: 'CTO' },
    { id: 2, staffName: 'Marko', role: 'CTO' },
    { id: 3, staffName: 'Marko', role: 'CTO' },
    { id: 4, staffName: 'Marko', role: 'CTO' },
    { id: 5, staffName: 'Marko', role: 'CTO' },
    { id: 6, staffName: 'Marko', role: 'CTO' },
    { id: 7, staffName: 'Marko', role: 'CTO' },
    { id: 8, staffName: 'Marko', role: 'CTO' },
    { id: 9, staffName: 'Marko', role: 'CTO' },
    { id: 10, staffName: 'Marko', role: 'CTO' },
    { id: 11, staffName: 'Marko', role: 'CTO' },
    { id: 12, staffName: 'Marko', role: 'CTO' },
  ];

  const [error, setError] = useState({ emailError: '', chooseStaffError: '' });

  const [active, setActive] = useState(0);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const nextStep = () => {
    switch (active) {
      case 0:
        if (!emailRegex.test(String(userForm.email).toLocaleLowerCase())) {
          setError((prev) => ({
            ...prev,
            emailError: 'Invalid email address',
          }));
        } else {
          setActive((current) => (current < 7 ? current + 1 : current));
          setError((prev) => ({ ...prev, emailError: '' }));
        }
        break;
      case 4:
        if (!userForm.staffMember) {
          setError((prev) => ({
            ...prev,
            chooseStaffError: 'Choose your staff',
          }));
        } else {
          setActive((current) => (current < 7 ? current + 1 : current));
          setError((prev) => ({ ...prev, chooseStaffError: '' }));
        }
        break;
      default:
        setActive((current) => (current < 7 ? current + 1 : current));
    }
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleConfirm = () => {
    print();
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '80%' }}>
          <Stepper
            iconSize={60}
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            allowNextStepsSelect={false}
            size={'lg'}
          >
            <Stepper.Step icon={<IconMail />}>
              <Box
                sx={{
                  maxWidth: '100%',
                  marginTop: 50,
                }}
                mx="auto"
              >
                <Text sx={{ marginBottom: 20 }} fz="xl" align="center">
                  Please add your email address
                </Text>
                <TextInput
                  value={userForm.email}
                  size="lg"
                  onChange={(e) => {
                    setUserForm({
                      ...userForm,
                      email: e.currentTarget.value,
                    });
                  }}
                  placeholder="your@email.com"
                />
                <Text sx={{ marginTop: 20 }} color="red">
                  {error.emailError}
                </Text>
              </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconUser />}>
              <Box sx={{ maxWidth: '100%', marginTop: 50 }} mx="auto">
                <Text sx={{ marginBottom: 20 }} fz="xl" align="center">
                  Please add your Full Name
                </Text>
                <TextInput
                  value={userForm.fullName}
                  size="lg"
                  onChange={(e) =>
                    setUserForm((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  placeholder="Full Name"
                />
              </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconPhone />}>
              <Box sx={{ maxWidth: '100%', marginTop: 50 }} mx="auto">
                <Text sx={{ marginBottom: 20 }} fz="xl" align="center">
                  Please add your phone number
                </Text>
                <NumberInput
                  hideControls
                  size="lg"
                  onChange={(e) =>
                    setUserForm((prev) => ({
                      ...prev,
                      mobile: e,
                    }))
                  }
                  placeholder="Mobile"
                />
              </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconId />}>
              <Box sx={{ maxWidth: '100%', marginTop: 50 }} mx="auto">
                <Text sx={{ marginBottom: 20 }} fz="xl" align="center">
                  Please add your ID Number
                </Text>
                <TextInput
                  value={userForm.idNumber}
                  size="lg"
                  onChange={(e) =>
                    setUserForm((prev) => ({
                      ...prev,
                      idNumber: e.target.value,
                    }))
                  }
                  placeholder="ID Number"
                />
              </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconMilitaryRank />}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                {mockData.map((el) => {
                  return (
                    <StaffCard setUserForm={setUserForm} key={el.id} el={el} />
                  );
                })}

                <Text sx={{ marginTop: 20 }} color="red">
                  {error.chooseStaffError}
                </Text>
              </Box>
            </Stepper.Step>
            <Stepper.Step icon={<IconCameraPlus />}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <WebcamCapture Image={Image} takeScreenshot={takeScreenshot} />
              </div>
            </Stepper.Step>
            <Stepper.Step icon={<IconSignature />}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Signature />
              </div>
            </Stepper.Step>
            <Stepper.Completed>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <PrintingIcon />
              </div>
              <div style={{ display: 'none' }}>
                <TicketToPrint
                  name={userForm.fullName}
                  selfie={Image}
                  ref={printRef}
                  // QRcode={QImage}
                />
              </div>
            </Stepper.Completed>
          </Stepper>

          <Group position="center" mt="xl">
            {active > 0 ? (
              <Button
                sx={{ fontSize: '20px' }}
                variant="default"
                onClick={prevStep}
                size="lg"
              >
                Back
              </Button>
            ) : null}
            {active === 7 ? (
              <Button onClick={handleConfirm} variant="subtle" size="lg">
                Confirm
              </Button>
            ) : (
              <Button
                sx={{ fontSize: '20px' }}
                variant="subtle"
                onClick={nextStep}
              >
                Next step
              </Button>
            )}
          </Group>
        </Box>
      </Box>
    </>
  );
};
