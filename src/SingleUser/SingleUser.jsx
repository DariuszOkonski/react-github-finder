import React, { Component } from 'react';
import UserHeader from './UserHeader';
import Loading from '../Loading/Loading';

class SingleUser extends Component {
  state = {
    loading: true,
    user: {
      login: "brad",
      id: 1614,
      node_id: "MDQ6VXNlcjE2MTQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1614?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/brad",
      html_url: "https://github.com/brad",
      followers_url: "https://api.github.com/users/brad/followers",
      following_url: "https://api.github.com/users/brad/following{/other_user}",
      gists_url: "https://api.github.com/users/brad/gists{/gist_id}",
      starred_url: "https://api.github.com/users/brad/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/brad/subscriptions",
      organizations_url: "https://api.github.com/users/brad/orgs",
      repos_url: "https://api.github.com/users/brad/repos",
      events_url: "https://api.github.com/users/brad/events{/privacy}",
      received_events_url: "https://api.github.com/users/brad/received_events",
      type: "User",
      site_admin: false,
      name: "Brad Pitcher",
      company: "GlobalMed",
      blog: "https://brad.github.io",
      location: "Nomadic (USA)",
      email: "bradpitcher@gmail.com",
      hireable: null,
      bio: "Juggler with a penchant for software development",
      public_repos: 202,
      public_gists: 2,
      followers: 64,
      following: 58,
      created_at: "2008-02-28T16:36:39Z",
      updated_at: "2020-04-14T14:26:07Z"
    }
  }

  render() {
    return (
      <div>
        <UserHeader />
        {
          this.state.loading ? (
            <Loading />
          ) : (
              <div>
                <h1>SingleUser Container</h1>
              </div>
            )
        }
      </div>
    );
  }
}

export default SingleUser;