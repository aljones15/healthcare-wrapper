import React from 'react';
import Table from '../table';

export function View(props) {
  console.log('Blog props ', props);
  return(
    <Table {...props} dataName='blog' rowType='Blog Post'/>
  );
}

export default View;
