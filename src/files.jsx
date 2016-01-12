var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Layout_header = require('./layout_header');
module.exports= React.createClass({
  render:function(){
    return <div className="files_block">
      <Layout_header/>
      <div className="row">
      <table id="board_table" className="table">
        <thead>
          <th>제목</th>
        </thead>
        <tbody>
          <tr>
          <td><Link to="/files/etc">전과 양식(학업계획서,위임장,전과포기각서)</Link></td>
          </tr>
          <tr>
          <td><Link to="/files/2015">2015 한양대 전과현황</Link></td>
          </tr>
          <tr>
          <td><Link to="/files/2014">2014 한양대 전과현황</Link></td>
          </tr>
          <tr>
          <td><Link to="/files/2013">2013 한양대 전과현황</Link></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  }
});
