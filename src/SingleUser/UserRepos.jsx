import React from 'react';
import SingleRepo from './SingleRepo';

const UserRepos = (props) => {
  const { repos } = props;

  return (
    <div className="card my-3">
      <h5 className="card-header">Latest Repos</h5>
      <div className="card-body">
        {
          repos.map(repo => <SingleRepo key={repo.id} {...repo} />)
        }
      </div>
    </div>
  );
}

export default UserRepos;