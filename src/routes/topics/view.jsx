import React from 'react';
import Table from '../table';

export function View({data}) {
  const topics = data ? data.topics : [];
  return(
    <Table data={topics} rowType='Topics' />
  );
}

export default View;
