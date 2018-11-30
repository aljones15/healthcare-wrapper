import React from 'react';
import { Spinner } from '@blueprintjs/core';
import clients from '../../api';

const spinnerStyle = {
  margin: '1rem',
  padding: '1rem'
}

export class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    }
  }
  componentDidMount() {
    const { section, options = null } = this.props;
    console.log('options ', options);
    if (/page/i.test(section)) {
      console.log('page test succeeds ', section);
      return clients.getPage(options.uri).then(response => {
      const data = response.data();
      console.log(`${section} response`, data);
      this.setState(() => ({loading: false, error: null, data}))
    });

    }
    clients.english.Content[section](options).then(response => {
      const data = response.data();
      console.log(`${section} response`, data);
      this.setState(() => ({loading: false, error: null, data}))
    });
  }
  renderKids() {
    return React.Children.map(this.props.children, (kid) => React.cloneElement(kid, this.state));
  }
  render() {
    if (this.state.loading) {
      return(
        <div style={spinnerStyle}>
          <Spinner intent='primary' />
        </div>
      );
    }
    return(
      <div className="container">
        {this.renderKids()}
      </div>
    );
  }
}

export default Container;
