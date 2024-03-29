"use strict";

import React from 'react'
import { render } from 'react-dom'
import {RouteHandler, Router, Route, browserHistory} from 'react-router'

module.exports = (
  // <Router history={browserHistory}>
    <Route handler={RouteHandler}>
      <Route name="home" path="/" handler={require('./pages/home.js')} />
      <Route name="articles" path="/articles" handler={require('./pages/articles.js')} />
      <Route name="entrance" path="/entrance" handler={require('./pages/Entrance.js')} />
      <Route name="courses" path="/courses" handler={require('./pages/Courses.js')} />
      <Route name="quizzes" path="/quizzes" handler={require('./pages/Quizzes.js')} />
      <Route name="article" path="/article/:id" handler={require('./pages/article.js')} />
    </Route>
  // </Router>
);
// <Route name="courses" path="/courses/:coursesData" handler={require('./pages/Courses.js')} />
