import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './main';

export class AppRouter extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main}/>
          <Route path="/articles" component={Main} />
          <Route path="/blog" component={Main} />
          <Route path="/questions" component={Main} />
          <Route path="/glossary" component={Main} />
          <Route path="/states" component={Main} />
          <Route path="/topics" component={Main} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
