import React from 'react';
import Container from '../container';
import View from './view';

export class Glossary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container section="Glossary"><View /></Container>
    );
  }
}

export default Glossary;
