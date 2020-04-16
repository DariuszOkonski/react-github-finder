import React from 'react';

const UserInfo = (props) => {
  const { avatar_url, html_url, public_repos, public_gists, followers, following, name, email, company, location, bio } = props;

  return (
    <div className="card mt-3">
      <div className="card-body row">
        <div className="col-lg-4">
          <div className="card" style={{ width: '100%' }}>
            <img src={avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary d-block">View Profile</a>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="mt-2 text-center">
            <span className="badge badge-primary mr-1 mt-1 p-2">Public Repos: {public_repos}</span>
            <span className="badge badge-secondary mr-1 mt-1 p-2">Public Gists: {public_gists}</span>
            <span className="badge badge-success mr-1 mt-1 p-2">Followers: {followers}</span>
            <span className="badge badge-danger mr-1 mt-1 p-2">Public Following: {following}</span>
          </div>

          <div className="card mt-2">
            <div className="card-body">
              <strong>Name:</strong> {name}
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <strong>Email:</strong> {email}
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <strong>Company:</strong> {company}
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <strong>Location:</strong> {location}
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <strong>Bio:</strong> {bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;