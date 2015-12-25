var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ref = new Firebase('https://change-major.firebaseio.com/data/');
var devRef = new Firebase('https://change-major.firebaseio.com/dev/');
var passRef = new Firebase('https://change-major.firebaseio.com/pass/');
module.exports = React.createClass({
  mixins:[ReactFireMixin],
  getInitialState: function() {
    return {
      password:null,
      admin:false,
      adminForWriting:false,
      output:null,
      filter:null,
      realPass:null,
      writing:null
    };
  },
  componentWillMount: function() {
    var that = this;
    this.bindAsArray(ref,'data');
    this.bindAsArray(devRef,'dev');
    passRef.once('value',function(snapshot){
      that.setState({
        realPass : snapshot.val()
      });
    });
  },
  handlePassword:function(event){
    this.setState({
      password:event.target.value
    });
  },
  handleFilter:function(event){
    this.setState({
      filter:event.target.value
    });
  },
  deleteItem:function(){
    console.log(this.state.data);
  },
  submitPassword:function(event){
    //Sangheum's House - BUCKET LIST
    if(this.state.password == this.state.realPass){
      this.setState({
        admin:true
      });
      var output = this.state.data.map(function(item,idx){
        return <div className="panel panel-default">
          {idx + '. '}
          <strong>{item.major} &nbsp;</strong>
        {'/ 평점평균 : ' + item.point_A} &nbsp;
        {'/ 이수학점 : ' + item.point_B} &nbsp;
        {'/ 최종점수 : ' + Math.round(item.final_point)} &nbsp;
        <br/>
        {item.date ? ('날짜 : ' + item.date) : ''}
      <button onClick={this.deleteItem} className="btn btn-danger">삭제</button>
      </div>

    });
      this.setState({
        output:output
      });
    } else{
      alert("비밀번호가 틀렸습니다.");
    }
  },
  correctPassForWriting:function(){
    var passInput = prompt("비밀번호를 입력해주세요");
    if(passInput == this.state.realPass){
      this.setState({
        adminForWriting:true
      });
    } else{
      alert("비밀번호가 틀렸습니다.");
    }
  },
  handleWriting:function(e){
    this.setState({
      writing:e.target.value
    });
  },
  submitWriting:function(){
    devRef.push({
      writing:this.state.writing
    });
  },
  showWritingRaw:function(){
    var output = this.state.dev.map(function(item){
      return <li>{item.writing}</li>
    });
    return output;
  },
  showWritingInput:function(){
    if(this.state.adminForWriting){
      return <div className="form-inline">
        <div className="form-group has-warning">
          개발일지:&nbsp;
          <input type="text" value={this.state.writing} onChange={this.handleWriting} className="form-control" placeholder="글 작성"/>
      </div>
      <button onClick={this.submitWriting} className="btn btn-primary">글 작성</button>
  </div>
  }
},
  render:function(){
    var date = new Date();
    var lectureBeginDate = new Date();
    lectureBeginDate.setFullYear(2016);
    lectureBeginDate.setMonth(2);
    lectureBeginDate.setDate(2);
    var changeMajorApplyDate = new Date();
    changeMajorApplyDate.setFullYear(2016);
    changeMajorApplyDate.setMonth(0);
    changeMajorApplyDate.setDate(25);
    var cnt_for_lectureBeginDate = lectureBeginDate.getTime() - date.getTime();
    var cnt_for_changeMajorDate = changeMajorApplyDate.getTime() - date.getTime();
    var day_lectureBegin = Math.floor(cnt_for_lectureBeginDate/(24*60*60*1000));
    var day_changeMajor = Math.floor(cnt_for_changeMajorDate/(24*60*60*1000));
    return <div className="row">
      <div className="col-md-6">
        <div className="calculator_block">
              <div id="adminPage_jumbotron" className="jumbotron">
                <h1>관리자 페이지</h1>
                  <div className="form-inline">
                    <div className="form-group has-warning">
                      비밀번호:&nbsp;
                      <input type="password" value={this.state.password} onChange={this.handlePassword} className="form-control" placeholder="Password"/>
                  </div>
                  <button onClick={this.submitPassword} className="btn btn-primary">로그인</button>
                  <div className="well">
                    {this.state.admin ? <input type="text" value={this.state.filter} onChange={this.handleFilter} className="form-control" placeholder="필터"/> : ''}
                {this.state.output}
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h2><i onClick={this.correctPassForWriting} className="fa fa-flask"></i> 개발일지</h2>
        <ul>
          {this.showWritingRaw()}
       </ul>
       {this.showWritingInput()}
       <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개강까지 {day_lectureBegin}일 남았습니다.</h5>
       <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전과신청일까지 {day_changeMajor}일 남았습니다.</h5>
      </div>
    </div>
  }
});
