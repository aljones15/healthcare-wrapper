import React from 'react';
import Table from '../table';

export function View({data}) {
  const articles = data ? data.articles : [];
  return(
    <Table data={articles} rowType='Articles' />
  );
}

export default View;
