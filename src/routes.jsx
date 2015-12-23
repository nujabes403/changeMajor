var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Layout = require('./layout');
var Admin = require('./admin');
var Chat = require('./chat');
var Info = require('./info');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/admin" component={Admin}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/info" component={Info}/>
    </Route>
  </Router>
);
