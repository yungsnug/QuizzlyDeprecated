"use strict";

import React from 'react'

export default class AddQuizBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      inputs: [
        {letter: "A", answer: "", placeholder: "Answer A..."},
        {letter: "B", answer: "", placeholder: "Answer B..."}
      ]
    };
  }

  handleChangeQ(event) {
    this.setState({question: event.target.value});
  }
  handleChange(i, event) {
    var inputs = this.state.inputs;
    inputs[i].answer = event.target.value;
    this.setState({inputs: inputs});
  }

  render() {
    var me = this;
    return (
      <div id="addQuizBody">
        <div className="row">
          <div className="six columns pl20 pt20 pb20 pr10">
            <div className="width100 greenBlueGradient white mont pt20 pb20 alignC pointer round outerShadow">FREE RESPONSE</div>
          </div>
          <div className="six columns pr20 pt20 pb20 pl10">
            <div className="width100 greenBlueGradient white mont pt20 pb20 alignC pointer round outerShadow">MULTIPLE CHOICE</div>
          </div>
        </div>
        <div className="pl20 pr20">
          <div className="flex">
            Q.) <textarea name="question" value={this.state.question} onChange={this.handleChangeQ} />
          </div>
          {this.state.inputs.map(function(input, i) {
            return (
              <div className="flex show">
                <span>{input.letter}.)</span>
                <input
                  type="text"
                  className="addCourseInput"
                  placeholder={input.placeholder}
                  value={input.answers}
                  onChange={me.handleChange.bind(me, i)}
                  key={i}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// <div className="flex show">
//   A.) <input type="text" className="addCourseInput" placeholder="Answer A..." value={this.state.answerA} onChange={this.handleChangeA.bind(this)} />
// </div>
// <div className="flex show">
//   B.) <input type="text" className="addCourseInput" placeholder="Answer B..." value={this.state.answerB} onChange={this.handleChangeB.bind(this)} />
// </div>
// <div className="flex show">
//   C.) <input type="text" className="addCourseInput" placeholder="Answer C..." value={this.state.answerC} onChange={this.handleChangeC.bind(this)} />
// </div>
// <div className="flex show">
//   D.) <input type="text" className="addCourseInput" placeholder="Answer D..." value={this.state.answerD} onChange={this.handleChangeD.bind(this)} />
// </div>
// <div className="flex show">
//   E.) <input type="text" className="addCourseInput" placeholder="Answer E..." value={this.state.answerE} onChange={this.handleChangeE.bind(this)} />
// </div>
