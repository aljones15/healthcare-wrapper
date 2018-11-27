import React from 'react';
import { Select } from '@blueprintjs/select';
import { Link } from 'react-router-dom';
import { MenuItem, Button, Icon, Navbar } from "@blueprintjs/core";
const { Group } = Navbar;

const selectOptions = [
  {title: 'Articles', icon:'star', path:'/articles'},
  {title: 'Blog', icon:'star', path:'/blog'},
  {title: 'Questions', icon:'star', path:'/questions'},
  {title: 'Glossary', icon:'star', path:'/glossary'},
  {title: 'States', icon:'star', path:'/states'},
  {title: 'Topics', icon:'star', path:'/topics'},
];

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
          <Link to='/'>
            <Icon icon="home"/>
            <span>{' '}Home</span>
          </Link>
          <Navbar.Divider />
          <Select
            items={selectOptions}
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
