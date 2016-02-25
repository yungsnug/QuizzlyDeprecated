// "use strict";

var course201 = {
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
};

var sections201 = [
  { title: "67558" },
  { title: "49939" },
  { title: "12283" }
];

var course104 = {
  title: "CSCI 104",
  quizzes: [
    {title: "Week 1"},
    {title: "Week 2"},
    {title: "Week 3"},
    {title: "Week 4"}
  ]
};

var sections104 = [
  { title: "98857" },
  { title: "79988" },
  { title: "09932" }
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
      course: course201,
      sections: sections201,
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

    $.when(
      $.post("/course/find",
        { course: 1 }
      ),
      $.post("/section/find",
        {
          professor: 1,
          course: 1
        }
      )
    ).then(function(course, sections) {
      console.log("course", course[0]);
      console.log("sections", sections[0]);

      if(course[0].length == 0) return; // if there are no courses, then there are no sections
      me.setState({
        course: course,
        sections: sections
      });
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
    var course = {};
    var sections = [];
    if(event.target.value === "CSCI 104") {
      course = course104;
      sections = sections104;
    } else if(event.target.value === "CSCI 201") {
      course = course201;
      sections = sections201;
    }

    this.setState({
      dropdownValue: event.target.value,
      course: course,
      sections: sections
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
    var course = this.state.course;
    course.quizzes.push({title: quiz.title});
    this.setState({course: course});
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
          <Course
            course={this.state.course}
            isCourse={true}
            ref={'course'}
            addQuizModal={this.addQuizModal.bind(this)}
            showMetricModal={this.showMetricModal.bind(this)}
          />
          {this.state.sections.map(function(section, i) {
            return (
              <Course
                section={section}
                course={this.state.course}
                isCourse={false}
                key={i}
                ref={'section' + i}
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
