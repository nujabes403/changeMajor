var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var ref = new Firebase('https://change-major.firebaseio.com/data/');
module.exports = React.createClass({
  mixins:[ReactFireMixin],
  getInitialState: function() {
    return {
      password:null,
      admin:false,
      output:null,
      filter:null
    };
  },
  componentWillMount: function() {
    this.bindAsArray(ref,'data');
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
  submitPassword:function(event){
    //Sangheum's House - BUCKET LIST
    if(this.state.password == '8833*'){
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
      <button className="btn btn-danger">삭제</button>
      </div>

    });
      this.setState({
        output:output
      });
    } else{
      alert("비밀번호가 틀렸습니다.");
    }
  },
  render:function(){
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
    </div>
  }
});
