var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ref = new Firebase('https://change-major.firebaseio.com/data/');
module.exports = React.createClass({
  mixins:[ReactFireMixin],
  getInitialState: function() {
    return {
      point_A:null,
      point_B:null,
      point_Result:null,
      want_major:null
    };
  },
  componentWillMount: function() {
    this.bindAsArray(ref, 'data');
  },
  chg_point_A:function(event){
    this.setState({
      point_A:event.target.value
    });
  },
  chg_point_B:function(event){
    this.setState({
      point_B:event.target.value
    });
  },
  chg_major:function(event){
    this.setState({
      want_major:event.target.value
    });
  },
  calculate:function(){
    var point_B_conversion = 0;
    if(this.state.point_A > 4.5 || this.state.point_A <= 0){
      alert("평점평균을 올바르게 입력해주세요.");
      return;
    }
    if(this.state.want_major == null){
      alert("희망학과를 입력해주세요. \n\n ex)경영학과 or 경영 / 컴퓨터공학과 or 컴공");
      return;
    }
    if(this.state.point_B < 33){
      alert("취득학점 33점 미만은 계산할 수 없습니다.");
      return;
    }
    else if(this.state.point_B > 50){
      alert("취득학점 40이상은 모두 같은 환산점수로 반영됩니다.");
      return;
    }
      else if (this.state.point_B == 33){
      point_B_conversion = 3.8;
    } else if (this.state.point_B == 34){
      point_B_conversion = 3.9;
    } else if (this.state.point_B == 35){
      point_B_conversion = 4.0;
    } else if (this.state.point_B == 36){
      point_B_conversion = 4.1;
    } else if (this.state.point_B == 37){
      point_B_conversion = 4.2;
    } else if (this.state.point_B == 38){
      point_B_conversion = 4.3;
    } else if (this.state.point_B == 39){
      point_B_conversion = 4.4;
    } else if (this.state.point_B >= 40){
      point_B_conversion = 4.5;
    }
    if(this.state.point_A == null && this.state.point_B == null){
      alert("점수를 입력해주세요.");
    } else if(this.state.point_A != null && point_B_conversion !=0 ){
      var final_point = (560/4.5) * this.state.point_A + (240/4.5) * point_B_conversion;

      this.setState({
        point_Result : final_point
      });
      var date = new Date();
      var date_output = date.getFullYear() + '년 ' + (date.getMonth()+1) + '월 ' + date.getDate() + '일 '
      + date.getHours() +'시 ' + date.getMinutes() + '분 ';
      ref.push({
        major:this.state.want_major,
        point_A:this.state.point_A,
        point_B:this.state.point_B,
        final_point:final_point,
        date:date_output
      });
    }
  },
  render:function(){
    return <div className="row">
      <div className="col-md-6">
        <div className="calculator_block">
              <div className="jumbotron">
                <img id="imgWord_calculator" src="../assets/imgs/word_calculator.png"/>
                  <div className="form-inline">
                    <div className="form-group has-warning">
                      평점평균:&nbsp;
                      <input type="number" value={this.state.point_A} onChange={this.chg_point_A} className="form-control" placeholder="평점평균"/>
                  </div>
                    <div className="form-group has-warning">
                      취득학점:&nbsp;
                      <input type="number" value={this.state.point_B} onChange={this.chg_point_B} className="form-control" placeholder="취득학점"/>
                    </div>
                    <button onClick={this.calculate} className="btn btn-default">계산</button>
                      <div id="major_input_form" className="form-group has-success">
                        희망학과&nbsp;&nbsp;
                        <input id="major_input" type="text" onChange={this.chg_major} value={this.state.want_major} className="form-control"/>
                      </div>
                    <div>
                      <img id="imgWord_calculator_below" src="../assets/imgs/word_calculator_below.png"/>
                      <p>{this.state.point_Result}</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      <div className="col-md-6">
        <div className="side_jumbotron">
          <a><span className="badge">기본사항</span></a><br/>
          - 교과성적평가는 지원자의 1학년 성적 평점평균 및 1학년 취득학점 환산점수 로 산출하며,<br/>
         반영비율은 평점평균 70%, 취득학점 30%로 합니다.(800점 만점)<br/>
       <br/>
          <a>전과점수 <span className="badge">예시</span></a>
          <br/>
전과 신청 학생의 면점시험 평균점수가 189점인 경우의 최종 전과평가점수는 아래와 같습니다.<br/>
706.67(최종 교과성적점수) + 189(면접시험 평균점수) = 895.67점 ← 최종 전과평가점수<br/>

<br/>
<a>1학년 성적 평점평균 및 취득학점 <span className="badge">반영기준</span></a><br/>

• 재적학년 1학년때의 겨울계절학기까지의 누적평점평균 및 취득학점으로 사정함<br/>
• 1학년 과목을 1학년 겨울계절학기에 성적상승재수강하는 경우 이를 반영함<br/>
• 1학년 과목을 2,3학년 재학시 성적상승재수강하는 경우 이를 반영하지 않음<br/>
• 1학년으로 자진유급하여 1학년 과목을 재수강하는 경우 이를 인정하여 반영함<br/>
• 교육과정 변경시 현재 적용받는 졸업학점에 따른 1학년 수료학점으로 지원자격을 결정함<br/>
• 1학년 필수과목은 재적학년 1학년때의 겨울계절학기까지의 이수 여부로 지원자격을 결정함<br/>
<br/>
<a> 동점자 <span className="badge">처리기준</span></a><br/>
① 동일대학 재학생 우선의 원칙<br/>
② 생년월일 연장자 우선순<br/>
<br/>
  <Link to="/info"><button className="btn btn-primary" type="button">
  전과인증 방법 <span className="badge"><i className="fa fa-info"></i></span>
  </button></Link>
&nbsp;&nbsp;
<a href="http://cafe.naver.com/changemajor"><button className="btn btn-info" type="button">
2015 한양대학교 전과카페 (12월 25일부터 운영)&nbsp;<span className="badge"><i className="fa fa-home"></i></span>
</button></a>
        </div>
        </div>
    </div>
  }
});
