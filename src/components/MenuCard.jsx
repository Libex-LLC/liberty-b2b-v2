import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  border-width: 4px;
  border-color: gray;
  background-color: ${(props) => props.color};
  width: 20rem;
  height: 15rem;
  justify-content: center;
`;
const P = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: rgba(255 255 255);
`;

function MenuCard({ place, onClick, color }) {
  return (
    <Div color={color} onClick={onClick}>
      <LoginIcon
        sx={{ marginTop: 4, color: 'white', alignSelf: 'center', fontSize: 90 }}
      />

      <P> {place}</P>
    </Div>
  );
}

export default MenuCard;
