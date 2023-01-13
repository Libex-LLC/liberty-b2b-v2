import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Groups2Icon from '@mui/icons-material/Groups2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function MenuCard({place, onClick, color}) {
    
    return (
        <div onClick={onClick} className={` border-2 rounded-3xl flex flex-col text-center w-72 mb-3  ${color} h-60`} >
          <LoginIcon sx={{ marginTop:4, color: 'white', alignSelf: 'center', fontSize: 90 }}/>
            
            <p className=' mt-12 text-white text-2xl  '> {place}</p>
        </div>
    );
}

export default MenuCard;