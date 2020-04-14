import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Github Finder</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/single-user">Single User</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/multiple-users">Multiple Users</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>









  );
}

export default Navigation;