import React, { useState } from 'react';
import './searchAccount.css'; // Import CSS file
import { Link } from 'react-router-dom';

function SearchAccount() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchID, setSearchID] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchRole, setSearchRole] = useState('');
  const [searchEmail, setSearchEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Mocking search results using dummy data
    const dummyData = [
      { id: 1, name: 'John Doe', role: 'Admin', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', role: 'User', email: 'jane.smith@example.com' },
      // Add more dummy data as needed
    ];
    // Filtering dummy data based on search criteria
    const filteredData = dummyData.filter(user =>
      (!searchID || user.id.toString().includes(searchID)) &&
      (!searchName || user.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (!searchRole || user.role.toLowerCase().includes(searchRole.toLowerCase())) &&
      (!searchEmail || user.email.toLowerCase().includes(searchEmail.toLowerCase()))
    );
    setSearchResults(filteredData);
  };

  return (
    <div>
      <h2>Search Users</h2>
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <label>ID:</label>
          <input
            type="text"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />
          <label>Name:</label>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <label>Role:</label>
          <input
            type="text"
            value={searchRole}
            onChange={(e) => setSearchRole(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="text"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
          <button id="search" type="submit">Search</button>
        </form>
      </div>

      <div className="displayResult">
        {searchResults.length > 0 ? (
          <div className="searchResults">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td><Link to="/updateAccount"><button>Update</button></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No results found.</div>
        )}
      </div>

      <div className="buttons-container">
        <form method="post" name="logout">
          <button className="logOutButtonSearch" name="logout">Logout</button>
        </form>
        <Link to={"/userAccount"}><button className="back-button-search">Back</button></Link>
      </div>
    </div>
  );
}

export default SearchAccount;
