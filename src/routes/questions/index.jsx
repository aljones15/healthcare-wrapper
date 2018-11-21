import React from 'react';
import Container from '../container';
import View from './view';

export class Questions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container section="Questions"><View /></Container>
    );
  }
}
export default Questions;
