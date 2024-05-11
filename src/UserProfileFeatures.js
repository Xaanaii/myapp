import React from 'react';
import './UserProfileFeatures.css';
import { Link } from 'react-router-dom';
function UserProfile() {  
 
  return (
    <div>
      <div className="UserAcctFeat">
        <div className="AcctFeat">
        <Link to="/CreateUserProfile">
            <img src="CreateUser.png" alt="Create Profile"/>
        </Link>
          <p>Create Profile</p>
        </div>

        <div className="AcctFeat">
        <Link to="/viewProfile">
            <img src="ViewUser.jpg"/>
          </Link>
          <p>View Profile</p>
        </div>

        <div className="AcctFeat">
          <a href="SearchProfile.js">
            <img src="SearchUser.png"/>
          </a>
          <p>Search Profile</p>
        </div>

        <div className="AcctFeat">
          <a href="SuspendProfile.js">
            <img src="suspendUser.jpeg" />
          </a>
          <p>Suspend Profile</p>
        </div>

        <div className="AcctFeat">
          <a href="UpdateProfile.js">
            <img src="UpdateUser.png"/>
          </a>
          <p>Update Profile</p>
        </div>
      </div>

      <div className="buttons-container">
        <button className="logOutController" name="logout">Logout</button>
        <Link to={"/"}><button className="go-back-button">Back</button></Link>
      </div>
    </div>
  );
}

export default UserProfile;