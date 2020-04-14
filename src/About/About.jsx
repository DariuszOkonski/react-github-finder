import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div class="jumbotron">
      <h2>
        <i class="fab fa-github-alt mr-1"></i>
         Github Finder App
      </h2>
      <p>Version: 1.0.0</p>
      <p>Author: Dariusz Okonski</p>
      <p>Year: 2020</p>
      <p>License: All Rights Reserved</p>
      <hr class="my-4" />
      <p>Go to</p>
      <NavLink class="btn btn-primary btn-sm mr-1" to="/" role="button">Home</NavLink>
      <NavLink class="btn btn-primary btn-sm mr-1" to="/single-user" role="button">Single User</NavLink>
      <NavLink class="btn btn-primary btn-sm" to="/multiple-users" role="button">Multiple Users</NavLink>
    </div>
  );
}

export default About;