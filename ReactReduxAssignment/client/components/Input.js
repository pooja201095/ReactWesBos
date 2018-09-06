import React,{Component} from "react";
import { Link } from "react-router";

const Input = React.createClass({
  getInitialState() {
    return {
      username: ""
    };
  },
  renderRepos(repo, i) {
    const date = new Date(repo.created_at).toDateString();
    var username = this.state.username;
    return (
      <Link
        to={`/${username}/${repo.name}/issues`}
        onClick={this.handleClick}
        key={i}
      >
        <li className="w3-bar" key={i}>
          <Link to={`/${username}/${repo.name}/issues`}>
            <span className="w3-bar-item w3-right">
              <button className="w3-button w3-white w3-border w3-border-blue w3-round-large">
                {repo.open_issues} <i className="fa fa-comments" />
              </button>
            </span>
          </Link>
          <div className="w3-bar-item">
            <span className="w3-large">{repo.name}</span>
            <br />
            <span>created on {date}</span>
          </div>
        </li>
      </Link>
    );
  },
  setUsername(e) {
    this.setState({ username: e.target.value});
  },
  fetchRepos(e) {
    e.preventDefault();
    var username = this.refs.userName.value;
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(response => this.props.fetchReposReq(response));
  },
  render() {
    return (
      <div className="w3-container">
        <h2>Input Form</h2>
        <form className="w3-container" onSubmit={this.fetchRepos}>
          <p>
            <input
              className="w3-input"
              type="text"
              ref="userName"
              onChange={this.setUsername}
              value={this.state.username}
            />
            <label>Username</label>
          </p>
          <p>
            <input type="submit" hidden />
          </p>
        </form>
        <ul className="w3-ul w3-card-4">
          {this.props.repo.repo && this.props.repo.repo.map(this.renderRepos)}
        </ul>
      </div>
    );
  }
});

export default Input;
