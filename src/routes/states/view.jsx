import React from 'react';
import Table from '../table';

export function View({data}){
  const states = data ? data.states : [];
  return(
    <Table data={states} rowType='States' />
  );
}

export default View;
