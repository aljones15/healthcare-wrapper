import React from 'react';
import { Select } from '@blueprintjs/select';
import { Link } from 'react-router-dom';
import { Button, Breadcrumbs, Breadcrumb, Icon, Navbar } from "@blueprintjs/core";
const { Group } = Navbar;

export class RouterHeader extends React.PureComponent {
  constructor(props) { 
    super(props);
  }
  getBread() {
      const { location : _loc } = this.props;
      const {pathname = "/" } = _loc;
      const text = pathname.toUpperCase();
      return [
        { href: pathname, icon: "star", text },
      ];
  }
  renderBread({text, icon, ...rest}) {
      return(
        <Breadcrumb {...rest}><Icon icon={icon} /> <span>{text}</span></Breadcrumb>
      );
  }
  render() {
    return(
      <Navbar id="router-header">
        <Group>
          <Navbar.Heading>
            <Breadcrumbs currentBreadcrumbRenderer={this.renderBread} items={this.getBread()} />
          </Navbar.Heading>
          <Navbar.Divider />
          <Link to='/'>
            <Icon icon="home"/>
            <span>{' '}Home</span>
          </Link>
          <Navbar.Divider />
          <Select
            items={["articles", "blog"]}
            itemRenderer={title => <div key={title}>{title}</div>}
          >
            <Button icon='double-chevron-right' text='Select'/>
          </Select>
        </Group>
      </Navbar>
    );
  }
}

export default RouterHeader;
