import React from 'react';
import {Link} from 'react-router';

class NotFound extends React.Component {
  render() {
    let messageStyle = {
        marginTop:40
    }

    return (
      <div style={messageStyle} className="container text-center">
        <div className="jumbotron">
          <h1>404 <i className="fa fa-exclamation-circle"></i></h1>
          <p>Resource not found!</p>
          <Link to="/">Go back to Login Page</Link>
        </div>
      </div>
    )
  }
}

export default NotFound;
