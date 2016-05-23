import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  render() {

      let containerStyle = {
        'margin':40
      }

      let loginBoxStyle = {
          'margin':'0 auto',
          'maxWidth':500
      };

      return (
        <div style={containerStyle}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                  <div style={loginBoxStyle} className="panel panel-warning">
                    <div className="panel-heading"><h2 className="panel-title">Login</h2></div>
                    <div className="panel-body">
                          <p>Please login using one of the following methods</p>
                          <div className="text-center">
                             <div className="">
                                <Link to="/play" className="btn btn-info btn-block">Twitter <i className="fa fa-twitter"></i></Link>
                                <Link to="/play" className="btn btn-primary btn-block">Facebook <i className="fa fa-facebook"></i></Link>
                                <Link to="/play" className="btn btn-default btn-block">Github <i className="fa fa-github-alt"></i> </Link>
                                <Link to="/play" className="btn btn-danger btn-block">Google <i className="fa fa-google-plus"></i></Link>
                             </div>
                          </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Login;
