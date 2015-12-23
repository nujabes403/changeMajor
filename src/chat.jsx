var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var Layout_header = require('./layout_header');
var chat_ref = new Firebase('https://change-major.firebaseio.com/chat/');

module.exports = React.createClass({
  mixins:[ReactFireMixin],
  getInitialState: function() {
  return {
    nickName : null,
    chatMsg : null,
    chatBox: null,
    chatOn:true,
    chatCount:0
  };
},
componentWillMount: function() {
  this.bindAsArray(chat_ref,'chatBox');

  chat_ref.on("value",function(snapshot){
    if(snapshot.numChildren() > 100){
      var idx = 0;
      //Query just first Chat Message
      snapshot.forEach(function(childSnapshot){
        if(idx == 1){
          return;
        }
        //Query will be ended in this line.
        idx++;
        //Remove First Child Chat Message.
        childSnapshot.ref().remove();
      });
    }

  });
},
handleChatMsg:function(e){
  this.setState({
    chatMsg:e.target.value
  });
},
handleNickName:function(e){
  this.setState({
    nickName:e.target.value
  });
},
submitChat:function(){
  if(this.state.nickName == "개발자"){
    var isDeveloper = prompt("비밀번호 : ");
    if(isDeveloper == "8833"){
      var date = new Date();
      var date_for_show = '(' + (date.getMonth()+1) + '.' + date.getDate() + ' / '
      + date.getHours() +':' + date.getMinutes() + ')';

        chat_ref.push({
          nickName:this.state.nickName,
          chatMsg : this.state.chatMsg,
          date : date_for_show
        });
        this.setState({
          chatCount:this.state.chatCount+1
        });
    } else{
      alert("다른 닉네임을 사용해주세요.");
    }
  } else{
    var date = new Date();
    var date_for_show = '(' + (date.getMonth()+1) + '.' + date.getDate() + ' / '
    + date.getHours() +':' + date.getMinutes() + ')';

      chat_ref.push({
        nickName:this.state.nickName,
        chatMsg : this.state.chatMsg,
        date : date_for_show
      });
      this.setState({
        chatCount:this.state.chatCount+1
      });
  }
},
loadChat:function(){
  var chat_output = this.state.chatBox.map(function(chat){
    var nickName_class = chat.nickName == '개발자' ? 'developer_nick' : '';
    return <li>
      <strong className={nickName_class}>{chat.nickName} &nbsp;</strong>
    <i className="fa fa-bullhorn"></i>{' : ' + chat.chatMsg} &nbsp;
      {chat.date}
    <br/>
  </li>
  });
  return chat_output;
},
chatToggle:function(){
  this.setState({
    chatOn : !this.state.chatOn
  });
},
  render:function(){
    return <div className="chat_block">
      <div className="panel">
        <a onClick={this.chatToggle}><h5>&nbsp;남김말 {this.state.chatOn ? '숨기기' : '보이기'}&nbsp;</h5></a>
        <ul>
          {this.state.chatOn ? this.loadChat() : ''}
        </ul>
       <div id="form_bar" className="form-inline">
         <div className="form-group has-warning">
           <label>&nbsp;닉네임 : &nbsp;</label><input id="nickName_input" type="text" value={this.state.nickName} onChange={this.handleNickName} className="form-control"/> <label>&nbsp;남김말 : &nbsp;</label><input type="text" value={this.state.chatMsg} onChange={this.handleChatMsg} className="form-control"/>
         </div>
         &nbsp;<button onClick={this.submitChat} className="btn btn-danger">말 남기기</button>
       </div>
     </div>
    </div>
    }
});
