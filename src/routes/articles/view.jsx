import React from 'react';
import { HTMLTable } from '@blueprintjs/core';

export function View(props) {
  console.log('View Articles ', props);
  const articles = props.data ? props.data.articles : [];
  const renderRows = () => articles.map(article => (
    <tr key={article.path}><td>{article.title}</td></tr>));
  return (
    <HTMLTable bordered={false} interactive={true}>
      <thead>
        <tr>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </HTMLTable>
  );
}

export default View;
