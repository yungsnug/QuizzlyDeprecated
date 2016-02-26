"use strict";

import React from 'react'
import {Sidebar} from './partials/Sidebar.js'
import {Header} from './partials/Header.js'

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

export class Layout {
  render() {
    console.log(RouteHandler);

    var me = this;
    return (
      <div id="quizzlyApp">
        <Sidebar />
        <Header />
        <RouteHandler />
      </div>
    )
  }
}

//{this.props.children}

// {React.Children.map(me.props.children, function (child) {
//   return React.cloneElement(child, { xxx: "jackson polluck" });
// })}
