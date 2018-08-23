import React from 'react';
import {Link} from 'react-router';

const Main=React.createClass({ 
    render(){
        return <div>
            <h1>
              <Link to="/">
                <div className="w3-container w3-black w3-center w3-allerta">
                  <p className="w3-xxlarge">Git Issues</p>
                </div>
              </Link>
            </h1>
            {React.cloneElement(this.props.children, this.props)}
          </div>;
    }
});

export default Main;