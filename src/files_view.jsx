var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Layout_header = require('./layout_header');
module.exports = React.createClass({
  showContents:function(){
    if(this.props.params.id == 'etc'){
      return <div>
        <br/>
        <p>[양식 1] 전과 지원서류 제출을 위한 학업계획서 양식입니다.<br/><br/>

[양식 2] 전과 지원서류 제출 시 본인이 직접 방문하지 못할 경우 첨부해야 하는 위임장 양식 입니다.<br/><br/>

[양식 3] 전과합격자 중 전과를 취소할 수 있는 전과포기각서 양식입니다.<br/><br/>
전과포기를 희망하는 학생은 지정된 기일까지 작성하여 전입대학 행정팀에 제출하시기 바랍니다.<br/><br/>
</p>
<a href="http://www.hanyang.ac.kr/data/500023/53_0.hwp"><p>전과양식 다운</p></a>
<p>출처 : {"http://www.hanyang.ac.kr/code_html/H1BAB2/indexG2.html"} </p>

        </div>
    } else {
        if(this.props.params.id == '2013'){
          return <div>
          <img className="file_imgs" src={'../assets/imgs/' + this.props.params.id + '_1.png'} />
          <img className="file_imgs" src={'../assets/imgs/' + this.props.params.id + '_2.png'} />
          <img className="file_imgs" src={'../assets/imgs/' + this.props.params.id + '_3.png'} />
          </div>
        } else{
          return <div>
            <img className="file_imgs" src={'../assets/imgs/' + this.props.params.id + '_1.png'} />
            <img className="file_imgs" src={'../assets/imgs/' + this.props.params.id + '_2.png'} />
          </div>
        }
      }
  },
  render:function(){
    return <div className="files_view_block">
      <Layout_header/>
    <div id="files_view_header">
        <h1>{this.props.params.id}</h1>
    </div>
    <div id="files_view_contents">
      <div className="well">
        <h3>내용</h3>
        {this.showContents()}
      </div>
    </div>
    </div>
  }
});
