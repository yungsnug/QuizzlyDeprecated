"use strict";

import React from 'react'

export default class AddCourseBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "conner"
    };
  }

  render() {
    return (
      <div id="addCourseBody">
        This is addCourseBody {this.state.name}
      </div>
    );
  }
}
