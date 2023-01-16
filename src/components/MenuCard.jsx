import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';




function MenuCard({place, onClick, color}) {
    const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  border-width: 4px;
  border-color: gray;
 background-color: ${color};
  width: 20rem;
  height: 15rem;
  justify-content: center;
 
`;
    
    return (
        <Div  onClick={onClick} 
        >
          <LoginIcon sx={{ marginTop:4, color: 'white', alignSelf: 'center', fontSize: 90 }}/>
            
            <p className=' mt-12 text-white text-2xl  '> {place}</p>
        </Div>
    );
}

export default MenuCard;