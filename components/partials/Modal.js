"use strict";

import React from 'react'
import AddCourseBody from '../partials/AddCourseBody.js'
import AddQuizBody from '../partials/AddQuizBody.js'
import AddQuestionBody from '../partials/AddQuestionBody.js'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log("Modal props", this.props);

    var modalInfo = this.props.modalInfo;
    this.state = {
      showModal: this.props.showModal,
      modalType: modalInfo.modalType,
      title: modalInfo.title
    };
  }

  render() {
    var body = {};
    if(this.state.modalType == "ADD_COURSE") {
      body = <AddCourseBody />;
    } else if(this.state.modalType == "ADD_QUIZ") {
      body = <AddQuizBody />;
    } else if(this.state.modalType == "ADD_QUESTION") {
      body = <AddQuestionBody />;
    }

    return (
      <div id="modalContainer" className={this.state.showModal ? "show" : "hide"}>
        <div id="modal">
          <div id="header">
            {this.state.title}
            <span className="floatR pointer" onClick={this.props.closeModal.bind(this)}>X</span>
          </div>
          <div id="body">{body}</div>
          <div id="footer">+</div>
        </div>
      </div>
    );
  }
}
