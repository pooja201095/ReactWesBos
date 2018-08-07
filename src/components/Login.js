import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login!!</h2>
    <p>Signin to manage you stores inventory</p>
    {/* We dont need this.props here as its a stateless functional component */}
    <button
      className="github"
      onClick={() => props.authenticate("Github")} 
    >
      Login with Github
    </button>
    <button
      className="facebook"
      onClick={() => props.authenticate("Facebook")}
    >
      Login with Facebook
    </button>
    <button
      className="twitter"
      onClick={() => props.authenticate("Twitter")}
    >
      Login with Twitter
    </button>
  </nav>
);

Login.propTypes={
    authenticate:PropTypes.func.isRequired
}
export default Login;