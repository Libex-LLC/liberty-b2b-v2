import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import bg from '../assets/libertyLogoPurple.png';

//usage
//<div
//style={{
//   display: 'block',
//   position: 'absolute',
//   alignSelf: 'center',
//   justifySelf: 'center',
//   zIndex: 100,
// }}
//>
// <Message />
//</div>

//nbr is used for key in map, so each message has it's own unique key
//it starts from 13 becuase in mocData we have 12 pre-generated messages.
let nbr = 13;
const DivMesContaier = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  height: 80%;
  scroll-behavior: smooth;
`;
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
`;

const Div = styled.div`
  background-color: white;
  border-radius: 1rem;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 35rem;
  box-shadow: 1px 1px 10px gray;
`;
const InputDiv = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  border-width: 2px;
  border-bottom: 0rem;
  border-left: 0rem;
  border-right: 0;
`;
const UserMesDiv = styled.div`
  margin-inline: 1rem;
  width: fit-content;
  max-width: 50%;
  height: fit-content;
  border-width: 2px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: start;
  padding-inline: 1rem;
  font-size: x-large;
  word-break: break-word;
  -ms-word-break: break-word;
  background-color: white;
  opacity: 0.9;
`;
const StaffMesDiv = styled.div`
  margin-inline: 1rem;
  width: fit-content;
  max-width: 50%;
  height: fit-content;
  border-width: 2px;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: end;
  align-self: end;
  padding-inline: 1rem;
  font-size: x-large;
  word-break: break-word;
  -ms-word-break: break-word;
  background-color: white;
  opacity: 0.9;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2.1rem;
  background-color: burlywood;
  align-self: center;
  border-radius: 1rem;
  font-size: large;
  font-weight: 500;
  margin-inline: 1rem;
  margin-top: 17px;
`;
const Input = styled.input`
  width: 80%;
  height: 100%;
  margin-inline: 10;
  border-radius: 0.5rem;
  border-width: 2px;
  padding-inline: 6px;
  margin-top: 0.5rem;
  font-size: 20px;
`;

function Message(props) {
  const [newMessage, setNewMessage] = useState({
    id: 13,
    name: 'Customer',
    message: '',
  });
  //for now we use mockMessages but later we will have replies from staff and user messages
  const mockMessage = [
    { id: 1, name: 'Staff', message: 'something' },
    {
      id: 2,
      name: 'Customer',
      message: 'something customer wrote to staff member',
    },
    {
      id: 3,
      name: 'Customer',
      message: 'something  customer wrote to staff member',
    },
    { id: 4, name: 'Staff', message: 'something' },
    {
      id: 5,
      name: 'Customer',
      message: 'something  customer wrote to staff member',
    },
    { id: 6, name: 'Staff', message: 'something' },
    {
      id: 7,
      name: 'Customer',
      message: 'something  customer wrote to staff member',
    },
    { id: 8, name: 'Staff', message: 'something' },
    {
      id: 9,
      name: 'Customer',
      message: 'something  customer wrote to staff member',
    },
    { id: 10, name: 'Staff', message: 'something' },
    {
      id: 11,
      name: 'Customer',
      message: 'something  customer wrote to staff member',
    },
    { id: 12, name: 'Staff', message: 'crucial thig of importance' },
  ];

  const [groupMessage, setGroupMessage] = useState([]);
  useEffect(() => {
    setGroupMessage(mockMessage);
  }, []);
  const handleChange = (event) => {
    setNewMessage({
      ...newMessage,
      id: nbr,
      message: event.target.value,
    });
  };
  const handleClick = () => {
    setNewMessage({
      ...newMessage,
      message: '',
    });
    nbr++;
    setGroupMessage((groupMessage) => [...groupMessage, newMessage]);
  };

  return (
    <Div>
      <DivMesContaier>
        <MessageBox>
          {groupMessage.map((data) =>
            data.name === 'Customer' ? (
              <UserMesDiv key={data.id}>{data.message}</UserMesDiv>
            ) : (
              <StaffMesDiv key={data.id}>{data.message}</StaffMesDiv>
            ),
          )}
        </MessageBox>
      </DivMesContaier>
      <InputDiv>
        <Input
          onChange={handleChange}
          placeholder="write shomething"
          value={newMessage.message}
        ></Input>
        <Button onClick={() => handleClick()}>
          <p>Send</p>
        </Button>
      </InputDiv>
    </Div>
  );
}

export default Message;
