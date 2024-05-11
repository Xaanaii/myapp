// PropertyUpdatePage.js

import React, { useState } from 'react';

import LandingPage from './landingPage';
import { Route, Routes } from 'react-router-dom';
import UserAccount from './UserAccountFeatures';
import UserProfile from './UserProfileFeatures';
import CreateUser from './createUser';
import ViewAccount from './viewAccount';
import SearchAccount from './searchAccount';
import UpdateAccount from './updateAccount';
import SuspendAccount from './suspendAccount';
import AgentReview from './agentReview';

import CreateProfile from './CreateUserProfile';


const App = () => {

  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/userAccount' element={<UserAccount/>}  />
        <Route path='/userProfile' element={<UserProfile/>}  />
        <Route path='/createUser' element={<CreateUser/>}  />
        <Route path='/viewAccount' element={<ViewAccount/>}  />
        <Route path='/searchAccount' element={<SearchAccount/>}  />
        <Route path='/updateAccount' element={<UpdateAccount/>}  />
        <Route path='/suspendAccount' element={<SuspendAccount/>}  />
        <Route path='/agentReview' element={<AgentReview/>}  />

        <Route path='/CreateUserProfile' element={<CreateProfile/>}  />
        
      </Routes>
    </div>
  );
}

export default App;



