import React, { forwardRef } from 'react';
import styled from 'styled-components';

import logo from '../assets/libertyLogoPurple.png';
import person from '../assets/person.png'; //remove in final v
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
  name = 'Shakira Repoll'; //temp until name is passed as prop, same is for selfie image being random person. remove in final v
  QRcode = qrcode; //remove in final v
  selfie = person; //remove in final v
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
          <p>{today + ' at ' + time} </p>
          <p>{'Valid Until: ' + tomorrow} </p>
        </DateWrap>
      </TextWrap>
      <Img src={QRcode} alt="person" />
    </Wrap>
  );
});
