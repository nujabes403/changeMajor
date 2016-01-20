var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var CalculatorInfo = require('./calculator_info');
var Chat = require('./chat');

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
                  <div className="form-group has-success">
                    <span>희망학과&nbsp;<input id="major_input" type="text" onChange={this.chg_major} value={this.state.want_major} className="form-control"/></span>
                  </div>
                  <p></p>
                    <div className="form-group has-warning">
                      <span>평점평균:&nbsp;<input type="number" value={this.state.point_A} onChange={this.chg_point_A} className="form-control" placeholder="평점평균"/></span>
                    </div>
                    <div className="form-group has-warning">
                      <span>취득학점:&nbsp;<input type="number" value={this.state.point_B} onChange={this.chg_point_B} className="form-control" placeholder="취득학점"/>
                      <button onClick={this.calculate} id="calculator_button" className="btn btn-default">계산</button></span>
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
          <CalculatorInfo/>
      </div>
    </div>
  }
});
