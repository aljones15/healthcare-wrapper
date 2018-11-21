import React from 'react';
import Container from '../container';
import View from './view';

export class Articles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container section="Articles">
        <View />
      </Container>
    );
  }
}
export default Articles;
