var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="footer_main">
      <p className="footer_p">© 2015 Hoon Il Kim. <br/> Q&A (Kakaotalk ID) : account403
      - 버그,문의사항 및 건의사항이 있다면 자유롭게 메세지 보내주세요 ^ ^</p>
      <Link to="admin">Admin Page</Link>
    </div>
  }
});
