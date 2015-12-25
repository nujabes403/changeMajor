var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Layout_header = require('./layout_header');
var Footer = require('./footer');
var Calculator = require('./calculator');
var Chat = require('./chat');
var GoogleAd = require('./googleAd');

module.exports = React.createClass({
  render:function(){
    return <div className="container-fluid layout2_main">
      {this.props.children ?
        this.props.children : <div><Layout_header/><Calculator/></div>}
        <Chat/>
        <GoogleAd client="ca-pub-9897177631447876" slot="2272212544" format="rectangle"/>
    <Footer/>
    </div>
  }
});
