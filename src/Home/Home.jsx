import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="jumbotron">
      <h2>
        <i className="fab fa-github-alt mr-1"></i>
         Github Finder App
      </h2>
      <p>This is a simple app which withdraw data from outer Github API</p>
      <hr className="my-4" />
      <p>Go to</p>
      <NavLink className="btn btn-primary btn-sm mr-1" to="/single-user" role="button">Single User</NavLink>
      <NavLink className="btn btn-primary btn-sm mr-1" to="/multiple-users" role="button">Multiple Users</NavLink>
      <NavLink className="btn btn-primary btn-sm" to="/about" role="button">About</NavLink>
    </div>
  );
}

export default Home;