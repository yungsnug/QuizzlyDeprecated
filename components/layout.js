"use strict";

import React from 'react'
import {Sidebar} from './partials/Sidebar.js'
import {Header} from './partials/Header.js'

export class Layout {
  render() {
    var me = this;
    return (
      <div id="quizzlyApp">
        <Sidebar />
        <Header />
        {this.props.children}
      </div>
    )
  }
}

// {React.Children.map(me.props.children, function (child) {
//   return React.cloneElement(child, { xxx: "jackson polluck" });
// })}

// {this.props.children}
