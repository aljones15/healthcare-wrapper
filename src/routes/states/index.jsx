import React from 'react';
import Container from '../container';
import View from './view';

export class States extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container section="States"><View /></Container>
    );
  }
}
export default States;
