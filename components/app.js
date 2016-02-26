var React = require('react')
, Router = require('react-router');

Router.run(require('./routes.js'), Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.body);
});

// Router.run(require('./routes.js'), function (Handler) {
//   React.render(<Handler/>, document.body);
// });
