var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="layout2_header">
      <header>
		<nav>
      <div className="logo_div">
        <Link to="/"><img className="layout2_logo" src="../assets/imgs/tourism_logo.png"/></Link>
      </div>
      <div>
        <img id="imgWord_header" src="../assets/imgs/word_header.png"/>
      </div>
		</nav>
</header>
-
      </div>

  }
});
