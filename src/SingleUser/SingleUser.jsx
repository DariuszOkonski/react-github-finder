import React, { Component, Fragment } from 'react';
import UserHeader from './UserHeader';
import Loading from '../Loading/Loading';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';
import UserAlert from './UserAlert';

class SingleUser extends Component {
  state = {
    username: '',
    loaded: false,
    loading: false,
    user: {
      login: "bradtraversy",
      id: 5550850,
      node_id: "MDQ6VXNlcjU1NTA4NTA=",
      avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/bradtraversy",
      html_url: "https://github.com/bradtraversy",
      followers_url: "https://api.github.com/users/bradtraversy/followers",
      following_url: "https://api.github.com/users/bradtraversy/following{/other_user}",
      gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
      starred_url: "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/bradtraversy/subscriptions",
      organizations_url: "https://api.github.com/users/bradtraversy/orgs",
      repos_url: "https://api.github.com/users/bradtraversy/repos",
      events_url: "https://api.github.com/users/bradtraversy/events{/privacy}",
      received_events_url: "https://api.github.com/users/bradtraversy/received_events",
      type: "User",
      site_admin: false,
      name: "Brad Traversy",
      company: "Traversy Media",
      blog: "traversymedia.com",
      location: "Boston",
      email: "traversymedia@gmail.com",
      hireable: true,
      bio: "I am a full stack web developer specializing mostly in JavaScript/Node.js but also work with PHP, Python & Rails. I am an online instructor for Traversy Media",
      public_repos: 194,
      public_gists: 34,
      followers: 21766,
      following: 5,
      created_at: "2013-09-26T15:36:02Z",
      updated_at: "2020-04-03T17:41:08Z"
    },
    repos: [
      {
        id: 255662867,
        node_id: "MDEwOlJlcG9zaXRvcnkyNTU2NjI4Njc=",
        name: "vanilla-parcel-boilerplate",
        full_name: "bradtraversy/vanilla-parcel-boilerplate",
        private: false,
        owner: {
          login: "bradtraversy",
          id: 5550850,
          node_id: "MDQ6VXNlcjU1NTA4NTA=",
          avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/bradtraversy",
          html_url: "https://github.com/bradtraversy",
          followers_url: "https://api.github.com/users/bradtraversy/followers",
          following_url: "https://api.github.com/users/bradtraversy/following{/other_user}",
          gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
          starred_url: "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/bradtraversy/subscriptions",
          organizations_url: "https://api.github.com/users/bradtraversy/orgs",
          repos_url: "https://api.github.com/users/bradtraversy/repos",
          events_url: "https://api.github.com/users/bradtraversy/events{/privacy}",
          received_events_url: "https://api.github.com/users/bradtraversy/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/bradtraversy/vanilla-parcel-boilerplate",
        description: "Simple starter workflow for building vanilla js apps with Parcel",
        fork: false,
        url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate",
        forks_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/forks",
        keys_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/keys{/key_id}",
        collaborators_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/teams",
        hooks_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/hooks",
        issue_events_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/issues/events{/number}",
        events_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/events",
        assignees_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/assignees{/user}",
        branches_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/branches{/branch}",
        tags_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/tags",
        blobs_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/statuses/{sha}",
        languages_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/languages",
        stargazers_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/stargazers",
        contributors_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/contributors",
        subscribers_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/subscribers",
        subscription_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/subscription",
        commits_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/commits{/sha}",
        git_commits_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/git/commits{/sha}",
        comments_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/comments{/number}",
        issue_comment_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/contents/{+path}",
        compare_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/merges",
        archive_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/downloads",
        issues_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/issues{/number}",
        pulls_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/pulls{/number}",
        milestones_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/milestones{/number}",
        notifications_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/labels{/name}",
        releases_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/releases{/id}",
        deployments_url: "https://api.github.com/repos/bradtraversy/vanilla-parcel-boilerplate/deployments",
        created_at: "2020-04-14T16:27:47Z",
        updated_at: "2020-04-15T10:42:01Z",
        pushed_at: "2020-04-14T17:00:59Z",
        git_url: "git://github.com/bradtraversy/vanilla-parcel-boilerplate.git",
        ssh_url: "git@github.com:bradtraversy/vanilla-parcel-boilerplate.git",
        clone_url: "https://github.com/bradtraversy/vanilla-parcel-boilerplate.git",
        svn_url: "https://github.com/bradtraversy/vanilla-parcel-boilerplate",
        homepage: null,
        size: 90,
        stargazers_count: 12,
        watchers_count: 12,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 3,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz"
        },
        forks: 3,
        open_issues: 0,
        watchers: 12,
        default_branch: "master"
      },
      {
        id: 254442184,
        node_id: "MDEwOlJlcG9zaXRvcnkyNTQ0NDIxODQ=",
        name: "react-tailwind-pixabay-gallery",
        full_name: "bradtraversy/react-tailwind-pixabay-gallery",
        private: false,
        owner: {
          login: "bradtraversy",
          id: 5550850,
          node_id: "MDQ6VXNlcjU1NTA4NTA=",
          avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/bradtraversy",
          html_url: "https://github.com/bradtraversy",
          followers_url: "https://api.github.com/users/bradtraversy/followers",
          following_url: "https://api.github.com/users/bradtraversy/following{/other_user}",
          gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
          starred_url: "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/bradtraversy/subscriptions",
          organizations_url: "https://api.github.com/users/bradtraversy/orgs",
          repos_url: "https://api.github.com/users/bradtraversy/repos",
          events_url: "https://api.github.com/users/bradtraversy/events{/privacy}",
          received_events_url: "https://api.github.com/users/bradtraversy/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/bradtraversy/react-tailwind-pixabay-gallery",
        description: "Pixabay image gallery",
        fork: false,
        url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery",
        forks_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/forks",
        keys_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/keys{/key_id}",
        collaborators_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/teams",
        hooks_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/hooks",
        issue_events_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/issues/events{/number}",
        events_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/events",
        assignees_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/assignees{/user}",
        branches_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/branches{/branch}",
        tags_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/tags",
        blobs_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/statuses/{sha}",
        languages_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/languages",
        stargazers_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/stargazers",
        contributors_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/contributors",
        subscribers_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/subscribers",
        subscription_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/subscription",
        commits_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/commits{/sha}",
        git_commits_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/git/commits{/sha}",
        comments_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/comments{/number}",
        issue_comment_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/contents/{+path}",
        compare_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/merges",
        archive_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/downloads",
        issues_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/issues{/number}",
        pulls_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/pulls{/number}",
        milestones_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/milestones{/number}",
        notifications_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/labels{/name}",
        releases_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/releases{/id}",
        deployments_url: "https://api.github.com/repos/bradtraversy/react-tailwind-pixabay-gallery/deployments",
        created_at: "2020-04-09T17:55:50Z",
        updated_at: "2020-04-15T08:34:32Z",
        pushed_at: "2020-04-09T17:56:25Z",
        git_url: "git://github.com/bradtraversy/react-tailwind-pixabay-gallery.git",
        ssh_url: "git@github.com:bradtraversy/react-tailwind-pixabay-gallery.git",
        clone_url: "https://github.com/bradtraversy/react-tailwind-pixabay-gallery.git",
        svn_url: "https://github.com/bradtraversy/react-tailwind-pixabay-gallery",
        homepage: null,
        size: 456,
        stargazers_count: 20,
        watchers_count: 20,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 16,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 16,
        open_issues: 0,
        watchers: 20,
        default_branch: "master"
      },
      {
        id: 252799979,
        node_id: "MDEwOlJlcG9zaXRvcnkyNTI3OTk5Nzk=",
        name: "coindex-cli",
        full_name: "bradtraversy/coindex-cli",
        private: false,
        owner: {
          login: "bradtraversy",
          id: 5550850,
          node_id: "MDQ6VXNlcjU1NTA4NTA=",
          avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/bradtraversy",
          html_url: "https://github.com/bradtraversy",
          followers_url: "https://api.github.com/users/bradtraversy/followers",
          following_url: "https://api.github.com/users/bradtraversy/following{/other_user}",
          gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
          starred_url: "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/bradtraversy/subscriptions",
          organizations_url: "https://api.github.com/users/bradtraversy/orgs",
          repos_url: "https://api.github.com/users/bradtraversy/repos",
          events_url: "https://api.github.com/users/bradtraversy/events{/privacy}",
          received_events_url: "https://api.github.com/users/bradtraversy/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/bradtraversy/coindex-cli",
        description: "Node.js CLI for checking crypto prices",
        fork: false,
        url: "https://api.github.com/repos/bradtraversy/coindex-cli",
        forks_url: "https://api.github.com/repos/bradtraversy/coindex-cli/forks",
        keys_url: "https://api.github.com/repos/bradtraversy/coindex-cli/keys{/key_id}",
        collaborators_url: "https://api.github.com/repos/bradtraversy/coindex-cli/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/bradtraversy/coindex-cli/teams",
        hooks_url: "https://api.github.com/repos/bradtraversy/coindex-cli/hooks",
        issue_events_url: "https://api.github.com/repos/bradtraversy/coindex-cli/issues/events{/number}",
        events_url: "https://api.github.com/repos/bradtraversy/coindex-cli/events",
        assignees_url: "https://api.github.com/repos/bradtraversy/coindex-cli/assignees{/user}",
        branches_url: "https://api.github.com/repos/bradtraversy/coindex-cli/branches{/branch}",
        tags_url: "https://api.github.com/repos/bradtraversy/coindex-cli/tags",
        blobs_url: "https://api.github.com/repos/bradtraversy/coindex-cli/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/bradtraversy/coindex-cli/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/bradtraversy/coindex-cli/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/bradtraversy/coindex-cli/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/bradtraversy/coindex-cli/statuses/{sha}",
        languages_url: "https://api.github.com/repos/bradtraversy/coindex-cli/languages",
        stargazers_url: "https://api.github.com/repos/bradtraversy/coindex-cli/stargazers",
        contributors_url: "https://api.github.com/repos/bradtraversy/coindex-cli/contributors",
        subscribers_url: "https://api.github.com/repos/bradtraversy/coindex-cli/subscribers",
        subscription_url: "https://api.github.com/repos/bradtraversy/coindex-cli/subscription",
        commits_url: "https://api.github.com/repos/bradtraversy/coindex-cli/commits{/sha}",
        git_commits_url: "https://api.github.com/repos/bradtraversy/coindex-cli/git/commits{/sha}",
        comments_url: "https://api.github.com/repos/bradtraversy/coindex-cli/comments{/number}",
        issue_comment_url: "https://api.github.com/repos/bradtraversy/coindex-cli/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/bradtraversy/coindex-cli/contents/{+path}",
        compare_url: "https://api.github.com/repos/bradtraversy/coindex-cli/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/bradtraversy/coindex-cli/merges",
        archive_url: "https://api.github.com/repos/bradtraversy/coindex-cli/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/bradtraversy/coindex-cli/downloads",
        issues_url: "https://api.github.com/repos/bradtraversy/coindex-cli/issues{/number}",
        pulls_url: "https://api.github.com/repos/bradtraversy/coindex-cli/pulls{/number}",
        milestones_url: "https://api.github.com/repos/bradtraversy/coindex-cli/milestones{/number}",
        notifications_url: "https://api.github.com/repos/bradtraversy/coindex-cli/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/bradtraversy/coindex-cli/labels{/name}",
        releases_url: "https://api.github.com/repos/bradtraversy/coindex-cli/releases{/id}",
        deployments_url: "https://api.github.com/repos/bradtraversy/coindex-cli/deployments",
        created_at: "2020-04-03T17:41:38Z",
        updated_at: "2020-04-13T21:40:58Z",
        pushed_at: "2020-04-06T15:41:27Z",
        git_url: "git://github.com/bradtraversy/coindex-cli.git",
        ssh_url: "git@github.com:bradtraversy/coindex-cli.git",
        clone_url: "https://github.com/bradtraversy/coindex-cli.git",
        svn_url: "https://github.com/bradtraversy/coindex-cli",
        homepage: null,
        size: 11,
        stargazers_count: 39,
        watchers_count: 39,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 14,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 14,
        open_issues: 2,
        watchers: 39,
        default_branch: "master"
      }
    ]
  }

  handleUserName = (username) => {
    console.log('SingleUser: ', username);

    this.setState({
      username
    })
  }

  componentDidUpdate() {
    this.checkLoaded();
  }

  checkLoaded = () => {
    if (this.state.username === '' && this.state.loaded) {
      this.setState({
        loaded: false
      })
    } else if (this.state.username !== '' && !this.state.loaded) {
      this.setState({
        loaded: true
      })
    }
  }

  render() {
    return (
      <div>
        <UserHeader handleUserName={this.handleUserName} />

        {
          this.state.loaded ?
            <Fragment>
              {
                this.state.loading ? (
                  <Loading />
                ) : (
                    <div>
                      <UserInfo {...this.state.user} />
                      <UserRepos repos={this.state.repos} />
                    </div>
                  )
              }
            </Fragment>
            :
            <UserAlert />
        }
      </div>

    )
  }
}

export default SingleUser;