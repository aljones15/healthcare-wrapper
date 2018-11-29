import React from 'react';
import { Card, Icon, Text } from '@blueprintjs/core';

export function Article({article, selected, setSelected}) {
  const { page_topic, path, title, bite, categories = [], lang } = article;
  const currentSelection = path === selected;
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
        {categories.join(', ')}
      </td>
      <td colSpan={1}>
        {lang}
      </td>
      <td colSpan={1}>
        {page_topic}
      </td>

    </tr>
  );
}
