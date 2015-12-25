var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Layout_header = require('./layout_header');
module.exports = React.createClass({
  render:function(){
    return <div className="info_block">
      <Layout_header/>
      <Link to="/">뒤로가기</Link>
      <br/>
        <div className="well">
          <div id="panel_etc" className="panel">
          <h4>&nbsp;<span className="badge">1</span> 본인의 한양메일 xxxxx@hanyang.ac.kr 을 이용해서</h4>
          <h4>&nbsp;<span className="badge">2</span> 메일 수신인 <strong>so7828@hanyang.ac.kr</strong> 으로</h4>
          <h4>&nbsp;&nbsp;&nbsp;- (1) 자신이 전과하고 싶은과</h4>
          <h4>&nbsp;&nbsp;&nbsp;- (2) 자신의 성적 캡쳐본 - <strong>이수학점과 평점이 모두 보이게 캡쳐해주세요!</strong> </h4>
          <h4>&nbsp;&nbsp;&nbsp;- (3) 전과점수 계산기를 돌려서 나온 최종점수</h4>
          <h4>&nbsp;&nbsp;&nbsp;- (4) 카페에 가입한 네이버 아이디 or 닉네임 (인증이 완료되면 해당 아이디를 등급업합니다.)</h4>
          <h4>&nbsp;<span className="badge">3</span> 이들을 첨부해서 위의 메일로 보내주시면 됩니다.</h4>
          <br/>
          <h4>&nbsp;* 인증이 완료되면 다른 회원들의 자료를 열람할 수 있습니다.</h4>
          <br/>
        <h4>예시 - </h4>
          <h4>1. 전과희망 : 컴퓨터공학과 </h4>
          <h4>2. 성적 캡쳐본</h4>
          <img id="gpa_img" src="assets/imgs/gpa.png"/>
          <h4>3. 최종점수 : 743.11</h4>
          </div>
        </div>
    </div>
  }
});
