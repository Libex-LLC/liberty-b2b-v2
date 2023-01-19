import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import logo from '../assets/libertyLogoPurple.png';
import qrcode from '../assets/qrcode.png'; //remove in final v

const Wrap = styled.div`
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

export const TicketToPrint = forwardRef(({ selfie, name, QRcode }, ref) => {
  QRcode = qrcode; //remove in final v when we get qr code generated for every user
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
      <Img src={QRcode} alt="QR" />
    </Wrap>
  );
});
