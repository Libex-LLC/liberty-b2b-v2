import React, { forwardRef } from 'react';
import styled from 'styled-components';

import logo from '../assets/libertyLogoPurple.png';
import QRcode from 'react-qr-code';

const Wrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const DateWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 180px;
  height: 180px;
`;

//For now QR code is generated for name of the person,
//later should be changed to auth code of user.

export const TicketToPrint = forwardRef(({ selfie, name }, ref) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomDD = String(tomorrow.getDate()).padStart(2, '0');
  let tomMM = String(tomorrow.getMonth() + 1).padStart(2, '0');
  let tomYYYY = tomorrow.getFullYear();
  tomorrow = tomMM + '/' + tomDD + '/' + tomYYYY;

  today = mm + '/' + dd + '/' + yyyy;
  let time = new Date();
  time = time.toLocaleTimeString();
  return (
    <Wrap ref={ref}>
      <Img src={selfie} alt="person" />
      <TextWrap>
        <DateWrap>
          <img
            src={logo}
            alt="Liberty"
            style={{
              width: '100px',
              height: '40px',
            }}
          />
          <p
            style={{
              fontWeight: '500',
              fontSize: '24px',
            }}
          >
            {name}
          </p>
        </DateWrap>
        <DateWrap
          style={{
            marginTop: '40px',
          }}
        >
          <p>{`${today} at ${time}`} </p>
          <p>{`Valit until: ${tomorrow}`} </p>
        </DateWrap>
      </TextWrap>
      <QRcode size={180} value={name} />
    </Wrap>
  );
});
