import React from 'react';

const SingleRepo = (props) => {
  const { stargazers_count, forks, watchers, name, html_url } = props;

  return (
    <div className="card mt-2 mx-1">
      <div className="row">
        <div className="col-md-6">
          <p className="p-1 m-0">Title: {name}</p>
          <p className="p-1 m-0">Github:
            <a href={html_url} target="_blank" rel="noopener noreferrer">Show Code</a>
          </p>
        </div>

        <div className="col-md-6">
          <div className="text-center">
            <span className="badge badge-primary m-1 p-2">Stars: {stargazers_count}</span>
            <span className="badge badge-secondary m-1 p-2">Watchers: {watchers}</span>
            <span className="badge badge-success mx-1 my-2 p-2">Forks: {forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRepo;