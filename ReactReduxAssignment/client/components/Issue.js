import React from "react";
import { Link } from "react-router";

const Issue = React.createClass({
    handleClick(){
         const { post, i } = this.props;
        console.log("Here comments");
        this.props.getComments("facebook", "create-react-app", post.number);
          
    },
  render() {
       const { post, i } = this.props;
       const date= new Date(post.updated_at).toDateString();
    return <div className="w3-container">
        <Link to={`/view/${post.id}`} onClick={this.handleClick}>
            <li className="w3-bar" key={i}>
              <Link to={`/view/${post.id}`}>
                <span className="w3-bar-item w3-right">
                  <button className="w3-button w3-white w3-border w3-border-blue w3-round-large">
                    {post.comments} <i className="fa fa-comments" />
                  </button>
                </span>
              </Link>
              <span className="w3-bar-item w3-xxlarge">
                {post.state === "open" ? (
                  <i className="fa fa-check-circle-o" />
                ) : (
                  <i className="fa fa-times-circle-o" />
                )}
              </span>
              <div className="w3-bar-item">
                <span className="w3-large">{post.title}</span>
                <br />
                <span>
                  #{post.number} opened on {date} by {post.user.login}
                </span>
              </div>
            </li>
        </Link>
      </div>;
  }
});

export default Issue;
