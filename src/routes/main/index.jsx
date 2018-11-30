import React from 'react';
import {
  Tag, Card,
  Breadcrumbs, Breadcrumb,
  Icon, H5 
} from "@blueprintjs/core";
import { SelectOptions } from '../header/options';
import Section from './section';

export class Main extends React.PureComponent {
  constructor(props) { 
    super(props);
  }
  renderRoutes() {
      return SelectOptions.map(option =>
        <Section key={option.title} {...option} />);
  }
  render() {
    return(
      <Card id="main">
        {this.renderRoutes()}
      </Card>
    );
  }
}

export default Main;
