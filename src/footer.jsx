var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="footer_main">
      <p className="footer_p">© 2015 Hoon Il Kim. <br/> Q&A (Kakaotalk ID) : account403 </p>
      <Link to="admin">Admin Page</Link>
    </div>
  }
});
