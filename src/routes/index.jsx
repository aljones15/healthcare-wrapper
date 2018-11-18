import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './main';
import Articles from './articles';
import Blog from './blog';
import Questions from './questions';
import Glossary from './glossary';
import States from './states';
import Topics from './topics';
import Page from './page';

export class AppRouter extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div id="router-container">
          <Route path="/" component={Main}/>
          <Route path="/articles" component={Articles} />
          <Route path="/blog" component={Blog} />
          <Route path="/questions" component={Questions} />
          <Route path="/glossary" component={Glossary} />
          <Route path="/states" component={States} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
