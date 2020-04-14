import React from 'react';

const UserHeader = () => {
  return (
    <div class="card">
      <h5 class="card-header">Search Single Github User</h5>
      <div class="card-body">
        <p class="card-text">Enter a username to fetch a user profile and repos</p>
        <form>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserHeader;