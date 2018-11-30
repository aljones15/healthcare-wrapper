import React from 'react';
import { Card, Icon, Text } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export function Row({row, selected, setSelected}) {
  const {
    url, date, page_topic,
    path, title, bite, 
    categories = [], lang, published 
  } = row;
  const currentSelection = path === selected;
  const _date = new Date(date);
  return (
    <tr
      key={path}
      onClick={() => setSelected(path)}
    >
      <td colSpan={1}>
        {currentSelection ? <h5>{title}</h5> : title}
        <Text>{bite}</Text>
      </td>
      <td colSpan={1}>
        <Link to={`page${url}`}>
          <Icon icon="link" />
        </Link>
      </td>
      <td colSpan={1}>
        {categories.length ? categories.join(', ') : 'None'}
      </td>
      <td colSpan={1}>
        {lang}
      </td>
      <td colSpan={1}>
        {page_topic || 'None'}
      </td>
      <td colSpan={1}>
        {published ? 'yes' : 'no'}
      </td>
      <td colSpan={1}>
        {_date.toLocaleDateString()}
      </td>
    </tr>
  );
}
