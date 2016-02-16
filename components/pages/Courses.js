// "use strict";

var courses201 = [
  {
    title: "CSCI 201",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"},
      {title: "Week 5"},
      {title: "Week 6"},
      {title: "Week 7"},
      {title: "Week 8"}
    ]
  },
  {
    title: "67558",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"},
      {title: "Week 5"},
      {title: "Week 6"},
      {title: "Week 7"},
      {title: "Week 8"}
    ]
  },
  {
    title: "49939",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"},
      {title: "Week 5"},
      {title: "Week 6"},
      {title: "Week 7"},
      {title: "Week 8"}
    ]
  },
  {
    title: "12283",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"},
      {title: "Week 5"},
      {title: "Week 6"},
      {title: "Week 7"},
      {title: "Week 8"}
    ]
  }
];

var courses104 = [
  {
    title: "CSCI 104",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"}
    ]
  },
  {
    title: "98857",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"}
    ]
  },
  {
    title: "79988",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"}
    ]
  },
  {
    title: "09932",
    quizzes: [
      {title: "Week 1"},
      {title: "Week 2"},
      {title: "Week 3"},
      {title: "Week 4"}
    ]
  }
];

import React from 'react'
import {Layout} from '../layout.js'
import Course from '../partials/Course.js'
import Modal from '../partials/Modal.js'

export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    console.log("Courses props", this.props);
    this.state = {
      dropdownValue: "CSCI 201",
      courses: courses201,
      showModal: false,
      modalInfo: {
        modalType: "ADD_QUIZ",
        title: "Add Quiz"
      }
    };
  }

  handleClick(num) {
    console.log("handle click!", num);
  }

  handleDropdownChange(event) {
    var courses = {};
    if(event.target.value === "CSCI 104") {
      courses = courses104;
    } else if(event.target.value === "CSCI 201") {
      courses = courses201;
    }

    this.setState({
      dropdownValue: event.target.value,
      courses: courses
    });
  }

  addCourse() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  addQuiz() {
    console.log("add quiz");
    this.setState({
      showModal: true,
      modalType: "ADD_QUIZ",
      title: "Add Quiz"
    });
  }

  addQuizToCourse(quiz) {
    console.log("Adding quiz '" +  quiz.title + "' in course " + this.state.dropdownValue);
    var courses = this.state.courses;
    for(var i = 0; i < courses.length; ++i) {
      courses[i].quizzes.push({title: quiz.title});
    }
    this.setState({courses: courses});
    this.closeModal();
  }

  render() {
    return (
      <Layout>
        <div id="courses" className="quizzlyContent">
          <select value={this.state.dropdownValue} className="mainDropdown" onChange={this.handleDropdownChange.bind(this)}>
            <option value="CSCI 201">CSCI 201</option>
            <option value="CSCI 104">CSCI 104</option>
          </select>
          {this.state.courses.map(function(course, i) {
            return (
              <Course data={course} key={i} title={course} ref={'course' + i} footer={i} addQuiz={this.addQuiz.bind(this)} />
            );
          }, this)}
          <div className="addEntityButton" onClick={this.addCourse.bind(this)}>+</div>
        </div>

        {(() => {
          if(this.state.showModal)
            return (
              <Modal
                modalInfo={this.state.modalInfo}
                showModal={this.state.showModal}
                key={this.state.showModal}
                closeModal={this.closeModal.bind(this)}
                addQuizToCourse={this.addQuizToCourse.bind(this)}
              />
            );
        })()}
      </Layout>
    );
  }
}
