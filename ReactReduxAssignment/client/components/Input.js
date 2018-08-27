import React,{Component} from "react";
import { Link } from "react-router";

class Input extends Component{
  render() {
    return <div class="w3-container w3-orange">
        <h2>Input Form</h2>
        <form className="w3-container">
          <p>
            <input className="w3-input" type="text" />
            <label>Username</label>
          </p>

          <p>
            <input className="w3-input" type="text" />
            <label>Repo Name</label>
          </p>
        </form>
      </div>;
  }
};

export default Input;
