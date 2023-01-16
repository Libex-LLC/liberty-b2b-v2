import React from 'react';

import MenuCard from '../components/MenuCard';

function LandingUser(props) {
    return (
        <div className='bg-zinc-700 opacity-100 w-screen h-screen flex items-center flex-col'>
          <h1 className='text-white font-serif font-medium text-2xl mt-24'>Make a selection below.</h1>
          <div className='mt-10 opacity-90 flex w-screen justify-around'>
          <MenuCard onClick={() => console.log('visitor check in')} color={'bg-cyan-700'}  place={"Visitor Check In"}/>
          <MenuCard onClick={() => console.log('visitor family ')} color={'bg-emerald-700'}  place={"Visitor Family Check In"}/>
          </div>
          <div className='mt-6 flex opacity-90 w-4/5 justify-around'>
          <MenuCard onClick={() => console.log('Contractor')} color={'bg-fuchsia-900'}  place={"Check In (Contractor)"}/>
          <MenuCard onClick={() => console.log('Staff family')} color={'bg-red-900'}  place={"Staff Family Check In"}/>
          </div>
        </div>
    );
}

export default LandingUser;