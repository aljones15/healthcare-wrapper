import React from 'react';
import Table from '../table';

export function View({data}) {
  const glossary = data ? data.glossary : [];
  return(
    <Table data={glossary} rowType='Term' />
  );
}
export default View;
