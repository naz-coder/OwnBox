import React from 'react';
import NavBar from '../pageHeader/NavBar';
import {LandingStyle} from './LandingStyle';

const Landing = ({signOut}) => {
  return (
    <LandingStyle>
        <div><NavBar signOut={signOut} /></div>
       <div className='landing-content'>
        <div>
        <h1>WELCOME TO OWN BOX FILE SYSTEM</h1>
        <p>You upload... We manage...</p>
        </div>
       </div>
    </LandingStyle>
  )
}

export default Landing