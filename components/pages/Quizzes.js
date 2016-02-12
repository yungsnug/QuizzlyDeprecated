"use strict";

import React from 'react'
import {Layout} from '../layout.js'
import Quiz from '../partials/Quiz.js'
import Modal from '../partials/Modal.js'

var quizzes201 = [
  {
    title: "Threading",
    questions: [
      {title: "What is threading?"},
      {title: "What is a lock?"},
      {title: "What is a CV?"},
      {title: "What is a mutex?"}
    ]
  },
  {
    title: "OO Programming",
    questions: [
      {title: "What is inheritance?"},
      {title: "What is OO?"},
      {title: "What is a class?"},
      {title: "What is an interface?"},
      {title: "What is Java OO?"},
      {title: "What is C++ OO?"}
    ]
  },
  {
    title: "Programming Languages",
    questions: [
      {title: "What is Python?"},
      {title: "What is a Java?"},
      {title: "What is a C++"},
      {title: "What is a Ada"},
      {title: "What is a Cobol"},
      {title: "What is a Lisp"},
      {title: "What is a Prolog"}
    ]
  },
  {
    title: "Javascript",
    questions: [
      {title: "What is AJAX?"},
      {title: "What does AJAX stand for?"},
      {title: "What is synchronous?"},
      {title: "What is var?"},
      {title: "What is == vs ===?"}
    ]
  }
];

var quizzes104 = [
  {
    title: "OO Programming",
    questions: [
      {title: "What is inheritance?"},
      {title: "What is OO?"},
      {title: "What is a class?"},
      {title: "What is an interface?"},
      {title: "What is Java OO?"},
      {title: "What is C++ OO?"}
    ]
  },
  {
    title: "Programming Languages",
    questions: [
      {title: "What is Python?"},
      {title: "What is a Java?"},
      {title: "What is a C++"},
      {title: "What is a Ada"},
      {title: "What is a Cobol"},
      {title: "What is a Lisp"},
      {title: "What is a Prolog"}
    ]
  },
  {
    title: "Javascript",
    questions: [
      {title: "What is AJAX?"},
      {title: "What does AJAX stand for?"},
      {title: "What is synchronous?"},
      {title: "What is var?"},
      {title: "What is == vs ===?"}
    ]
  },
  {
    title: "Threading",
    questions: [
      {title: "What is threading?"},
      {title: "What is a lock?"},
      {title: "What is a CV?"},
      {title: "What is a mutex?"}
    ]
  }
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: "CSCI 201",
      quizzes: quizzes201,
      showModal: false,
      modalInfo: {
        modalType: "ADD_QUIZ",
        title: "Add Quiz"
      }
    };
  }

  handleClick(num) {
    console.log("handle clik!", num);
  }

  handleDropdownChange(event) {
    var quizzes = {};
    if(event.target.value === "CSCI 104") {
      quizzes = quizzes104;
    } else if(event.target.value === "CSCI 201") {
      quizzes = quizzes201;
    }

    this.setState({
      dropdownValue: event.target.value,
      quizzes: quizzes
    });
  }

  addQuiz() {
    var modalInfo = this.state.modalInfo;
    modalInfo.title = "Add Quiz";
    modalInfo.modalType = "ADD_QUIZ";
    this.setState({
      showModal: true,
      modalInfo: modalInfo
    });
  }

  addQuestion(quizTitle) {
    console.log("this.props.quiz.title", quizTitle);
    var modalInfo = this.state.modalInfo;
    modalInfo.title = "Adding quiz question to: " + quizTitle;
    modalInfo.modalType = "ADD_QUESTION";
    this.setState({
      showModal: true,
      modalInfo: modalInfo
    });
  }

  closeModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <Layout>
        <div id="quizzes" className="p20 quizzlyContent">
          <select value={this.state.dropdownValue} className="mainDropdown" onChange={this.handleDropdownChange.bind(this)}>
            <option value="CSCI 201">CSCI 201</option>
            <option value="CSCI 104">CSCI 104</option>
          </select>
          {this.state.quizzes.map(function(quiz, i) {
            return (
              <Quiz quiz={quiz} key={i} ref={'quiz' + i} addQuestion={this.addQuestion.bind(this)} />
            );
          }, this)}
          <div className="addEntityButton" onClick={this.addQuiz.bind(this)}>+</div>
        </div>
        <Modal modalInfo={this.state.modalInfo} showModal={this.state.showModal} key={this.state.showModal} closeModal={this.closeModal.bind(this)}/>
      </Layout>
    );
  }
}
