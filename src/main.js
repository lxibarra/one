import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './app.jsx';
import Login from './pages/login.jsx';
import NotFound from './pages/404.jsx';

ReactDom.render((
  <Router history={browserHistory}>
   <Route path="/" component={Login}/>
   <Route path="/play" component={App}/>
   <Route path="*" component={NotFound}/>
 </Router>
), document.getElementById('container'))

//ReactDom.render(<App/>, document.getElementById('container'));
