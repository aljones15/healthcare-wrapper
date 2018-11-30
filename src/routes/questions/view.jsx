import React from 'react';
import Table from '../table';

export function View({data}) {
  const questions = data ? data.questions : [];
  return(
    <Table data={questions} rowType='Question' />
  );
}
export default View;
