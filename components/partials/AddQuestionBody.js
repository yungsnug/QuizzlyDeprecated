"use strict";

import React from 'react'

export default class AddQuizBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [
        {letter: undefined, text: "", placeholder: "Question..."},
        {letter: "A", text: "", placeholder: "Answer A..."},
        {letter: "B", text: "", placeholder: "Answer B..."},
        {letter: "C", text: "", placeholder: "Answer C..."}
      ]
    };
  }

  handleChange(i, event) {
    var inputs = this.state.inputs;
    inputs[i].text = event.target.value;
    this.setState({inputs: inputs});
  }

  addQuestion() {
    var inputs = this.state.inputs;
    var letter = String.fromCharCode(inputs[inputs.length - 1].letter.charCodeAt() + 1);
    var input = {letter: letter, text: "", placeholder: "Answer " + letter + "..."};
    inputs.push(input);
    this.setState({inputs: inputs});
  }

  render() {
    var me = this;
    return (
      <div id="addQuestionBody">
        <div className="row">
          <div className="six columns p20 pr10">
            <div className="modalButton">FREE RESPONSE</div>
          </div>
          <div className="six columns p20 pl10">
            <div className="modalButton">MULTIPLE CHOICE</div>
          </div>
        </div>
        <div className="pl20 pr20">
          {this.state.inputs.map(function(input, i) {
            return (
              <div className="flex mb20 flexVertical">
                {(() => {
                  if(input.letter)
                    return (<span className="mr15">{input.letter}.)</span>)
                })()}
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
        <div className="footerButton" onClick={this.addQuestion.bind(this)} >+</div>
      </div>
    );
  }
}
