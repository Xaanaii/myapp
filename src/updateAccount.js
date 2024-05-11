import React, { useState } from 'react';
import './updateAccount.css'; // Import CSS file
import { Link } from 'react-router-dom';

function UpdateAccount() {
  const [newUserRole, setNewUserRole] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [licenseId, setLicenseId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const userData = {
      email,
      name,
      password,
      licenseId,
      phoneNumber,
      role: newUserRole
    };
    console.log(userData);
    // Add logic to send data to server or update state accordingly
  };

  return (
    <div className='form-container'>
      <h2>Update User Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id="update"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            id="update"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            id="update"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>License ID:</label>
          <input
            type="text"
            id="update"
            value={licenseId}
            onChange={(e) => setLicenseId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            id="update"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select
            id="update"
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            required
          >
            <option value="">Please select a role</option>
            <option value="System Admin">System Admin</option>
            <option value="Real Estate Agent">Real Estate Agent</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
          </select>
        </div>
        <div className="button-container">
          <button className="updateButton" type="submit">Update</button>
        </div>
      </form>

      <div className="button-container">
        <form method="post" name="logout">
          <button className="logOutButton" name="logout">Logout</button>
        </form>
        <Link to={"/userAccount"}><button className="backButton">Back</button></Link>
      </div>
    </div>
  );
}

export default UpdateAccount;
