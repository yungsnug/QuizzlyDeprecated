"use strict";

import React from 'react'
import {render} from 'react-dom'
// import { Router, Route, RouteHandler } from 'react-router'
// import Home from './pages/home.js'
// import Entrance from './pages/Entrance.js'
// import Courses from './pages/Courses.js'
// import Quizzes from './pages/Quizzes.js'

render(require('./routes.js'), document.getElementById("quizzly"));

// <Router history={browserHistory}>
//   <Route path="/" component={Home}>
//     <Route path="entrance" component={Entrance} />
//     <Route path="courses" component={Courses} />
//     <Route path="quizzes" component={Quizzes} />
//   </Route>
// </Router>


// var React = require('react')
// , Router = require('react-router')
// , RouteHandler = require('react-router')
// , Route = require('react-router');
//
// Router.run(require('./routes.js'), Router.HistoryLocation, (Root) => {
//   React.render(<Root {...window.__ReactInitState__} />, document.body);
//   delete window.__ReactInitState__;
// });

// Router.run((<Route handler={RouteHandler}>
//       <Route name="home" path="/" handler={require('./pages/home.js')} />
//       <Route name="entrance" path="/entrance" handler={require('./pages/Entrance.js')} />
//       <Route name="courses" path="/courses" handler={require('./pages/Courses.js')} />
//       <Route name="quizzes" path="/quizzes" handler={require('./pages/Quizzes.js')} />
//     </Route>), Router.HistoryLocation, (Root) => {
//   React.render(<Root {...window.__ReactInitState__} />, document.body);
//   delete window.__ReactInitState__;
// });
