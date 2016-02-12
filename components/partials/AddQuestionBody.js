"use strict";

import React from 'react'

export default class AddQuizBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      inputs: [
        {letter: "A", answer: "", placeholder: "Answer A..."},
        {letter: "B", answer: "", placeholder: "Answer B..."},
        {letter: "C", answer: "", placeholder: "Answer C..."},
        {letter: "D", answer: "", placeholder: "Answer D..."},
        {letter: "E", answer: "", placeholder: "Answer E..."}
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
      <div id="addQuestionBody">
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
