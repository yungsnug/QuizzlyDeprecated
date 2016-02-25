import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './pages/home.js'
import Entrance from './pages/Entrance.js'
import Courses from './pages/Courses.js'
import Quizzes from './pages/Quizzes.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="entrance" component={Entrance} />
      <Route path="courses" component={Courses} />
      <Route path="quizzes" component={Quizzes} />
    </Route>
  </Router>
), document.body);

// Router.run(require('./routes.js'), Router.HistoryLocation, (Root) => {
//   React.render(<Root {...window.__ReactInitState__} />, document.body);
//   delete window.__ReactInitState__;
// });
