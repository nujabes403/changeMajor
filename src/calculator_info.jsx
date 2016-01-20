var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render:function(){
    return <div className="side_jumbotron">
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
      <Link to="/files">
      <button className="btn btn-warning"><span>자료실로 <i className="fa fa-briefcase"></i></span></button>
      </Link>
      &nbsp;&nbsp;
      <Link to="/info"><button className="btn btn-primary" type="button">
      전과인증 방법 <span className="badge"><i className="fa fa-info"></i></span>
      </button></Link>
      &nbsp;&nbsp;
      <a href="http://cafe.naver.com/changemajor"><button className="btn btn-info" type="button">
      2015-16 전과카페&nbsp;<span className="badge"><i className="fa fa-home"></i></span>
      </button></a>
    </div>
  }
});
