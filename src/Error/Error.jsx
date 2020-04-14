import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div class="jumbotron">
      <h2>
        <i class="fab fa-github-alt mr-1"></i>
         Github Finder App
      </h2>
      <h2 className="text-center text-danger my-3">ERROR - THERE IS NO SUCH A ROUTE</h2>
      <hr class="my-4" />
      <p>Go to</p>
      <NavLink class="btn btn-primary btn-sm mr-1" to="/" role="button">Home</NavLink>
      <NavLink class="btn btn-primary btn-sm mr-1" to="/single-user" role="button">Single User</NavLink>
      <NavLink class="btn btn-primary btn-sm mr-1" to="/multiple-users" role="button">Multiple Users</NavLink>
      <NavLink class="btn btn-primary btn-sm" to="/about" role="button">About</NavLink>
    </div>
  );
}

export default Error;