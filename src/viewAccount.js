import React, { useState, useEffect } from 'react';
import './viewAccount.css'; // Import CSS file
import { Link } from 'react-router-dom';

function ViewAccount() {
  const [userAccounts, setUserAccounts] = useState([
    { User_ID: '1', Name: 'John Doe', Email: 'john@example.com', License_ID: 'LIC123', Phone_Number: '123-456-7890', Status: 'Active', Role: 'System Admin' },
    { User_ID: '2', Name: 'Jane Smith', Email: 'jane@example.com', License_ID: 'LIC456', Phone_Number: '987-654-3210', Status: 'Suspended', Role: 'Real Estate Agent' },
    { User_ID: '3', Name: 'Michael Johnson', Email: 'michael@example.com', License_ID: 'LIC789', Phone_Number: '555-123-4567', Status: 'Active', Role: 'Seller' },
    { User_ID: '4', Name: 'Emily Brown', Email: 'emily@example.com', License_ID: 'LIC321', Phone_Number: '444-567-8901', Status: 'Active', Role: 'Buyer' }
  ]);
  

  useEffect(() => {
    // Call for Viewing
    fetchUserAccounts();
  }, []);

  const fetchUserAccounts = async () => {
    try {
      const response = await fetch('../UserAccount/ViewAcctController.php');
      const data = await response.json();
      setUserAccounts(data);
    } catch (error) {
      console.error('Error fetching user accounts:', error);
    }
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await fetch('LogoutController.php', { method: 'POST' });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>User Account List</h2>
      <div className="displayAcctResult">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>License ID</th>
              <th>Phone Number</th>
              <th>Role</th> 
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userAccounts.map((userAcct, index) => (
              <tr key={index}>
                <td>{userAcct.User_ID}</td>
                <td>{userAcct.Name}</td>
                <td>{userAcct.Email}</td>
                <td>{userAcct.License_ID}</td>
                <td>{userAcct.Phone_Number}</td>
                <td>{userAcct.Role}</td> 
                <td>{userAcct.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttons-container">
        <form method="post" name="logout" onSubmit={handleLogout}>
          <button className="logOutButtonView" type="submit" name="logout">Logout</button>
        </form>
        <Link to={"/userAccount"}><button className="back-button-view">Back</button></Link>
      </div>
    </div>
  );
}

export default ViewAccount;

