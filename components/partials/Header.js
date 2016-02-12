"use strict";

import React from 'react'
import {Link} from 'react-router'

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="quizzlyHeader" className="lightBlueBackground borderBottom flexVertical flexEnd" style={{"height": "57px"}}>
        <a href="#">Settings</a>
        <a className="ml30" href="#">Terms &amp; Services</a>
        <a className="ml30" href="#">Contact</a>
        <a className="ml30" href="#">About</a>
        <div className="ml30">
          <Link to="/entrance">Log Out</Link>
        </div>
        <div className="ml30 mr10 circle avatar"></div>
      </div>
    )
  }
}
