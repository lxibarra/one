/*
  Firebase auth docs
  https://firebase.google.com/docs/auth/#key_functions
  Documentation for twitter authentication
  https://firebase.google.com/docs/auth/web/twitter-login#redirect-mode

*/

import React from 'react';
import {Link} from 'react-router';
import Firebase from 'firebase';
import { browserHistory } from 'react-router';
import firebaseConfig from '../firebase.keys.js';


class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.setState({ loginError:'hide'});

     Firebase.initializeApp(firebaseConfig);
  }

  twitterLogin() {
    this.setState({
      loginError:'hide'
    });
    let provider = new Firebase.auth.TwitterAuthProvider();
    Firebase.auth().signInWithPopup(provider).then((result)=>{
      browserHistory.push('/play');
    }).catch((error)=>{
      this.setState({
        loginError:'show'
      });
    })
  }

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
                                <button onClick={this.twitterLogin.bind(this)} className="btn btn-info btn-block">Twitter <i className="fa fa-twitter"></i></button>
                                <Link to="/play" className="btn btn-primary btn-block">Facebook <i className="fa fa-facebook"></i></Link>
                                <Link to="/play" className="btn btn-default btn-block">Github <i className="fa fa-github-alt"></i> </Link>
                                <Link to="/play" className="btn btn-danger btn-block">Google <i className="fa fa-google-plus"></i></Link>
                             </div>
                          </div>

                          <div className={this.state.loginError}>
                              <hr/>
                            <div className="alert alert-danger" role="alert">
                              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                              <span className="sr-only">Error:</span>
                              Authentication Error, please try again.
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
