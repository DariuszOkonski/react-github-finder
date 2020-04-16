import React, { useState } from 'react';

const UserHeader = ({ handleUserName }) => {
  const [userName, setUserName] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value);
    handleUserName(e.target.value);
  }

  return (
    <div className="card">
      <h5 className="card-header">Search Single Github User</h5>
      <div className="card-body">
        <p className="card-text">Enter a username to fetch a user profile and repos</p>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username..."
              value={userName}
              onChange={(e) => onChange(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserHeader;