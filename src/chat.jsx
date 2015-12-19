var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var chat_ref = new Firebase('https://change-major.firebaseio.com/chat/');
module.exports = React.createClass({
  mixins:[ReactFireMixin],
  getInitialState: function() {
  return {
    nickName : null,
    chatMsg : null,
    chatBox: null
  };
},
componentWillMount: function() {
  this.bindAsArray(chat_ref,'chatBox');
},
handleNickName:function(e){
  this.setState({
    nickName:e.target.value
  });
},
handleChatMsg:function(e){
  this.setState({
    chatMsg:e.target.value
  });
},
submitChat:function(){
  chat_ref.push({
    nickName:this.state.nickName,
    chatMsg : this.state.chatMsg
  });
},
showChat:function(){
  var chat_output = this.state.chatBox.map(function(chat){
    return <li>
      <strong>{chat.nickName} &nbsp;</strong>
    {' : ' + chat.chatMsg} &nbsp;
    <br/>
  </li>
  });
  return chat_output;
},
  render:function(){
    return <div className="chat_block">
      <div className="panel">
        <ul>
          {this.showChat()}
        </ul>
      </div>
      <div className="form-inline">
        <div className="form-group has-warning">
          <input type="text" value={this.state.nickName} onChange={this.handleNickName} className="form-control"/>
        </div>
        <div className="form-group has-warning">
          <input type="text" value={this.state.chagMsg} onChange={this.handleChatMsg} className="form-control"/>
        </div>
        <button onClick={this.submitChat} className="btn btn-danger">입력</button>
      </div>
    </div>
    }
});
