import React from 'react';
import Container from '../container';
import View from './view';

export default function(props) { 
  console.log(props);
  const { pathname } = props.location;
  const notPage = /\/page\//i;
  const uri = pathname.replace(notPage, '');
  return (
      <Container section="Page" options={{uri}}>
        <View />
      </Container>
  );
  
}
