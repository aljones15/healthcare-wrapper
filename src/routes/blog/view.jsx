import React from 'react';
import Table from '../table';

export function View({data}) {
  const blog = data ? data.blog : [];
  return(
    <Table data={blog} rowType='Blog Post'/>
  );
}

export default View;
