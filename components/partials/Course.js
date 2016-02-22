"use strict";

import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Course Title"
    };
  }

  render() {
    var footer = this.props.footer == 0 ? <div className="footerButton" onClick={this.props.addQuizModal.bind(this)}>+</div> : null;
    return (
      <div className="mainPanel">
        <div className="scrollRegion">
          <div className="header">{this.props.title.title}</div>
          <div className="body">
            {this.props.data.quizzes.map(function(quiz, i) {
              return (
                <div onClick={this.props.showMetricModal.bind(this, quiz)} key={i} title={quiz} ref={'quiz' + i} className="item">{quiz.title}</div>
              );
            }, this)}
          </div>

          {footer}
        </div>
      </div>
    );
  }
}
