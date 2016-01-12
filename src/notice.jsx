var React = require('react');
var ReactFireMixin = require('reactfire');
var passRef = new Firebase('https://change-major.firebaseio.com/pass/');
var noticeRef = new Firebase('https://change-major.firebaseio.com/notice/');
module.exports = React.createClass({
  mixins:[ReactFireMixin],
  getInitialState: function() {
    return {
      noticeMsg:'',
      noticeToInput:false,
      realPass:null
    };
  },
  handleNoticeMsg:function(e){
    this.setState({
      noticeMsg:e.target.value
    });
  },
  submitNoticeMsg:function(){
    var date = new Date();
    var date_for_show =  (date.getMonth()+1) + '월' + date.getDate() + '일 '
    + date.getHours() +':' + date.getMinutes() + ' 기준 - ';
    noticeRef.set(date_for_show + ' ' + this.state.noticeMsg);
    this.toggleNoticeBar();
  },
  toggleNoticeBar:function(){
    var passInput = prompt('비밀번호를 입력해주세요.');
    if(passInput == this.state.realPass){
      this.setState({
        noticeToInput:!this.state.noticeToInput
      });
    } else{
      alert("비밀번호가 틀렸습니다.");
    }
  },
  showNotice:function(){
    if(this.state.noticeToInput){
      return <div>
        <input onChange={this.handleNoticeMsg} className="form-control"/><button onClick={this.submitNoticeMsg} className="btn btn-danger">지정</button>
        </div>
    } else{
      return <span onClick={this.toggleNoticeBar}>{this.state.noticeMsg}</span>
    }
  },
  componentWillMount: function() {
    var that = this;
    noticeRef.once('value',function(snapshot){
      that.setState({
        noticeMsg : snapshot.val()
    });
    passRef.once('value',function(snapshot){
      that.setState({
        realPass : snapshot.val()
      });
    });
  });
  },
  render:function(){
    return <div id="notice_panel" className="panel panel-default">
        {this.showNotice()}
    </div>
  }
});
