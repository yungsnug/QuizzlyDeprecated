"use strict";

import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Course Title"
    };
  }

  handleClick(num) {
    console.log("Clicked: ", num);
  }

  render() {
    return (
      <div className="mainPanel">
        <div className="scrollRegion">
          <div className="header">{this.props.title.title}</div>
          <div className="body">
            {this.props.data.quizzes.map(function(quiz, i) {
              var boundClick = this.handleClick.bind(this, i);
              return (
                <div onClick={boundClick} key={i} title={quiz} ref={'quiz' + i} className="item">{quiz.title}</div>
              );
            }, this)}

          </div>
          <div className="footerButton">+</div>
        </div>
      </div>
    );
  }
}
