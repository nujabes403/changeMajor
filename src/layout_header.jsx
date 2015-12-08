var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="layout2_header">
      <header>
		<nav>
      <div className="logo_div">
        <img className="layout2_logo" src="../assets/imgs/tourism_logo.png"/>
      </div>
      <div>
        <h3 className="layout2_logo_text">한양대 전과하자</h3>
      </div>
		</nav>
</header>
<p>-</p>
      </div>

  }
});
