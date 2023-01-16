import React from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';

function LandingUser(props) {
  const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3f3f46 ;
 
  width: 100vw;
  height: 100vh;
  
`;  
const Div1 = styled.div`
  display: flex;
  justify-content: space-around;
  opacity: 0.9;
  margin-top:2.5rem ;
 
  width: 100vw;
  
  
`;  
const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  opacity: 0.9;
  margin-top:1.5rem ;
 
  width: 80vw;
  
  
`; 
 
    return (
        <Div>
          <h1 className='text-white font-serif font-medium text-2xl mt-24'>Make a selection below.</h1>
          <Div1>
          <MenuCard onClick={() => console.log('visitor check in')} color={'#3f7092'}  place={"Visitor Check In"}/>
          <MenuCard onClick={() => console.log('visitor family ')} color={'#568f65 '}  place={"Visitor Family Check In"}/>
          </Div1>
          <Div2>
          <MenuCard onClick={() => console.log('Contractor')} color={'#963d3d'}  place={"Check In (Contractor)"}/>
          <MenuCard onClick={() => console.log('Staff family')} color={'#4a4880'}  place={"Staff Family Check In"}/>
          </Div2>
          </Div>
    );
}

export default LandingUser;