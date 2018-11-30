import React, { useState } from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { Row } from './row';

export function View(props) {
  const [selected, setSelected ] = useState(null);
  const { dataName, rowType } = props;
  const rows = props.data ? props.data[dataName] : [];
  const renderRows = () => rows.map(row => (
    row ? <Row
      key={row.path || row.title + row.date}
      setSelected={setSelected}
      row={row}
      selected={selected} 
    /> : null
  ));
  return (
    <HTMLTable bordered={false} interactive={true}>
      <thead>
        <tr>
          <th>{rowType}</th>
          <th>Link</th>
          <th>Categories</th>
          <th>Language</th>
          <th>Topic</th>
          <th>Published</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </HTMLTable>
  );
}

export default View;
