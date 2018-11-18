import React from 'react';
import { Select } from '@blueprintjs/select';
import { Breadcrumbs, Breadcrumb, Icon } from "@blueprintjs/core";

export class Main extends React.PureComponent {
  constructor(props) { 
    super(props);
  }
  getBread() {
      const { location : _loc } = this.props;
      const {pathname = "/" } = _loc;
      const text = pathname.toUpperCase();
      return [
        { href: pathname, icon: "folder-close", text },
      ];
  }
  render() {
    console.log('main props ', this.props);
    return(
      <div id="main">
        <Breadcrumbs items={this.getBread()} />
      </div>
    );
  }
}

export default Main;
