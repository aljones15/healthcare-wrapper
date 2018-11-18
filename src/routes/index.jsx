import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Main from './main';

export class AppRouter exteneds React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}/>
      </Router>
    );
  }
}
