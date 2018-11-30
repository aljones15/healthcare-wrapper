import React from 'react';
import { Select } from '@blueprintjs/select';
import { Link } from 'react-router-dom';
import { MenuItem, Button, Icon, Navbar } from "@blueprintjs/core";
const { Group } = Navbar;
import { SelectOptions } from './options';

const logoStyle = {
  width: '200px',
  margin: '10px',
};

export class RouterHeader extends React.PureComponent {
  constructor(props) { 
    super(props);
  }
  renderOption({title, icon, path}){
    const { history } = this.props;
    return(<MenuItem key={title} text={title} onClick={() => history.push(path)} />);
  }
  render() {
    const { location : _loc } = this.props;
    const {pathname = "Select" } = _loc;
    const select = pathname == '/' ? "Select" : pathname.replace(/\//, '');
    return(
      <Navbar id="router-header">
        <Group>
          <img src='https://www.healthcare.gov/images/logo@2x.png' style={logoStyle} />
          <Navbar.Divider />

          <Link to='/'>
            <Icon icon="home"/>
            <span>{' '}Home</span>
          </Link>
          <Navbar.Divider />
          <Select
            items={SelectOptions}
            itemRenderer={(props) => this.renderOption(props)}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={({path}) => this.props.history.push(path)}
          >
            <Button icon='double-chevron-right' text={select} />
          </Select>
        </Group>
      </Navbar>
    );
  }
}

export default RouterHeader;
