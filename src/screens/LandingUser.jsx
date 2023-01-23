import React from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bababa;
  width: 100vw;
  height: 100vh;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: space-around;
  opacity: 1;
  margin-top: 2.5rem;
  width: 100vw;
`;
const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  opacity: 1;
  margin-top: 1.5rem;
  width: 80vw;
`;

const H1 = styled.h1`
  margin-top: 4.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(255 255 255);
`;
function LandingUser(props) {
  const navigate = useNavigate();

  return (
    <Div>
      <H1>Make a selection below.</H1>
      <Div1>
        <MenuCard
          onClick={() => navigate('/visitor-check-in')}
          color={'#3f7092'}
          place={'Visitor Check In'}
        />
        <MenuCard
          onClick={() => console.log('visitor family ')}
          color={'#568f65 '}
          place={'Visitor Family Check In'}
        />
      </Div1>
      <Div2>
        <MenuCard
          onClick={() => console.log('Contractor')}
          color={'#963d3d'}
          place={'Check In (Contractor)'}
        />
        <MenuCard
          onClick={() => console.log('Staff family')}
          color={'#4a4880'}
          place={'Staff Family Check In'}
        />
      </Div2>
    </Div>
  );
}

export default LandingUser;
