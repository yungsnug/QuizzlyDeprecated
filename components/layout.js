"use strict";

import React from 'react'
import {Sidebar} from './partials/Sidebar.js'
import {Header} from './partials/Header.js'

export class Layout {
  render() {
    return (
      <div id="quizzlyApp">
        <Sidebar />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
