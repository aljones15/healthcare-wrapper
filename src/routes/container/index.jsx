import React from 'react';
import clients from '../../api';

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
    const { section } = this.props;
    clients.english.Content[section]().then(response => {
      const data = response.data();
      console.log('response ', data);
      this.setState(() => ({loading: false, error: null, data}))
    });
  }
  renderKids() {
    return React.Children.map(this.props.children, (kid) => React.cloneElement(kid, this.state));
  }
  render() {
    return(
      <div className="container">
        {this.renderKids()}
      </div>
    );
  }
}

export default Container;
