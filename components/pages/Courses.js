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
import MetricModal from '../partials/MetricModal.js'

export default class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: "CSCI 201",
      semesterDropdownValue: "Fall 2016",
      courses: courses201,
      showModal: false,
      showMetricModal: false,
      modalInfo: {
        modalType: "ADD_QUIZ",
        title: "Add Quiz"
      }
    };
  }

  componentDidMount() {
    var me = this;
    $.ajax({
      type: 'post',
      url: "/course/find",
      data: {professor: 1},
      dataType: 'json'
    }).done(function(courses) {
      console.log("courses", courses);
      me.setState({
        courses: courses
      });
    }).fail(function(error) {
      console.log("fail", error);
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      showMetricModal: false
    });
  }

  showMetricModal(quiz) {
    console.log("showMetricModal!", quiz);
    var modalInfo = this.state.modalInfo;
    modalInfo.title = quiz.title;
    this.setState({
      showModal: false,
      showMetricModal: true,
      modalInfo: modalInfo
    });
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

  handleSemesterDropdownChange(event) {
    this.setState({
      semesterDropdownValue: event.target.value
    });
  }

  addCourseModal() {
    var modalInfo = this.state.modalInfo;
    modalInfo.modalType = "ADD_COURSE";
    modalInfo.title = "Add Course";
    this.setState({
      showModal: true,
      showMetricModal: false,
      modalInfo: modalInfo
    });
  }

  addQuizModal() {
    var modalInfo = this.state.modalInfo;
    modalInfo.title = "Add Quiz";
    modalInfo.modalType = "ADD_QUIZ";
    this.setState({
      showModal: true,
      showMetricModal: false,
      modalInfo: modalInfo
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
          <select value={this.state.dropdownValue} className="dropdown mainDropdown" onChange={this.handleDropdownChange.bind(this)}>
            <option value="CSCI 201">CSCI 201</option>
            <option value="CSCI 104">CSCI 104</option>
          </select>
          <select value={this.state.semesterDropdownValue} className="dropdown semesterDropdown" onChange={this.handleSemesterDropdownChange.bind(this)}>
            <option value="CSCI 201">Fall 2016</option>
            <option value="CSCI 104">Summer 2015</option>
            <option value="CSCI 104">Spring 2015</option>
            <option value="CSCI 104">Fall 2015</option>
          </select>
          {this.state.courses.map(function(course, i) {
            return (
              <Course
                data={course}
                key={i}
                title={course}
                ref={'course' + i}
                footer={i}
                addQuizModal={this.addQuizModal.bind(this)}
                showMetricModal={this.showMetricModal.bind(this)}
              />
            );
          }, this)}
          <div className="addEntityButton" onClick={this.addCourseModal.bind(this)}>+</div>
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
        {(() => {
          if(this.state.showMetricModal)
            return (
              <MetricModal
                modalInfo={this.state.modalInfo}
                showMetricModal={this.state.showMetricModal}
                key={this.state.showMetricModal}
                closeModal={this.closeModal.bind(this)}
              />
            );
        })()}
      </Layout>
    );
  }
}
