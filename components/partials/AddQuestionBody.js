"use strict";

import React from 'react'

export default class AddQuizBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  handleChange(i, event) {
    var me = this;
    var question = this.state.question;
    if(i == 'question') {
      question.title = event.target.value;
    } else {
      question.inputs[i].text = event.target.value;
    }

    this.setState({question: question});
  }

  addQuestion() {
    var inputs = this.state.question.inputs;
    var letter = String.fromCharCode(inputs[inputs.length - 1].letter.charCodeAt() + 1);
    var input = {letter: letter, text: "", placeholder: "Answer " + letter + "..."};
    inputs.push(input);
    this.setState({inputs: inputs});
  }

  showFreeResponse() {
    var input = [];
    input.push(this.state.question.inputs[0]);
    this.setState({inputs: input});
  }

  showMultipleChoice() {
    this.setState(AddQuizBody.defaultProps);
  }

  render() {
    var me = this;
    var questionInput = (
      <div className="flex mb20 flexVertical">
        <input
          type="text"
          className="addCourseInput"
          placeholder={this.state.question.placeholder}
          value={this.state.question.title}
          onChange={this.handleChange.bind(this, 'question')}
        />
      </div>
    );
    return (
      <div id="addQuestionBody">
        <div className="row">
          <div className="six columns p20 pr10">
            <div className="modalButton" onClick={this.showMultipleChoice.bind(this)}>MULTIPLE CHOICE</div>
          </div>
          <div className="six columns p20 pl10">
            <div className="modalButton" onClick={this.showFreeResponse.bind(this)}>FREE RESPONSE</div>
          </div>
        </div>
        <div className="pl20 pr20">
          {questionInput}
          {this.state.question.inputs.map(function(input, i) {
            return (
              <div className="flex mb20 flexVertical">
                <span className="mr15">{input.letter}.)</span>
                <input
                  type="text"
                  className="addCourseInput"
                  placeholder={input.placeholder}
                  value={input.text}
                  onChange={me.handleChange.bind(me, i)}
                  key={i}
                />
              </div>
            );
          })}
        </div>
        <button onClick={this.props.addQuestionToQuiz.bind(this, me.state.question)}>Add</button>
        <div className="footerButton" onClick={this.addQuestion.bind(this)} >+</div>
      </div>
    );
  }
}

AddQuizBody.defaultProps = {
  question: {
    title: "",
    placeholder: "Question...",
    inputs: [
      {letter: "A", text: "", placeholder: "Answer A..."},
      {letter: "B", text: "", placeholder: "Answer B..."},
      {letter: "C", text: "", placeholder: "Answer C..."}
    ]
  },
};
