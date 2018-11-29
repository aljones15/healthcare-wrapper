import React from 'react';
import { Card, Icon, Text } from '@blueprintjs/core';

export function Article({article, selected, setSelected}) {
  console.log('Article ', article);
  const { date, page_topic, path, title, bite, categories = [], lang, published } = article;
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
        <Icon icon="link" />
      </td>
      <td colSpan={1}>
        {categories.length ? categories.join(', ') : 'None'}
      </td>
      <td colSpan={1}>
        {lang}
      </td>
      <td colSpan={1}>
        {page_topic}
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
