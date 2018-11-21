import React from 'react';
import Container from '../container';
import View from './view';

export class Topics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container section="Topics"><View /></Container>
    );
  }
}

export default Topics;
