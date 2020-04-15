import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="jumbotron">
      <h2>
        <i className="fab fa-github-alt mr-1"></i>
         Github Finder App
      </h2>
      <p>Version: 1.0.0</p>
      <p>Author: Dariusz Okonski</p>
      <p>Year: 2020</p>
      <p>License: All Rights Reserved</p>
      <hr className="my-4" />
      <p>Go to</p>
      <NavLink className="btn btn-primary btn-sm mr-1" to="/" role="button">Home</NavLink>
      <NavLink className="btn btn-primary btn-sm mr-1" to="/single-user" role="button">Single User</NavLink>
      <NavLink className="btn btn-primary btn-sm" to="/multiple-users" role="button">Multiple Users</NavLink>
    </div>
  );
}

export default About;