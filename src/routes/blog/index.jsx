import React from 'react';
import Container from '../container';
import View from './view';

export class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container section="Blog">
        <View />
      </Container>
    );
  }
}

export default Blog;
