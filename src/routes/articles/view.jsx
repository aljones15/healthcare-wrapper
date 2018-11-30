import React, { useState } from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { Article } from './article';
import Table from '../table';

export function View(props) {
  const [selected, setSelected ] = useState(null);
  const articles = props.data ? props.data.articles : [];
  const renderRows = () => articles.map(article => (
    article ? <Article
      key={article.path || Date.now()}
      setSelected={setSelected}
      article={article}
      selected={selected} 
    /> : null
  ));
  return (
    <HTMLTable bordered={false} interactive={true}>
      <thead>
        <tr>
          <th>Article</th>
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
