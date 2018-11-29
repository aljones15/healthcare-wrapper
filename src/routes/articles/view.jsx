import React, { useState } from 'react';
import { HTMLTable } from '@blueprintjs/core';
import { Article } from './article';

export function View(props) {
  console.log('View Articles ', props);
  const [selected, setSelected ] = useState(null);
  console.log('selected ', selected);
  const articles = props.data ? props.data.articles : [];
  const renderRows = () => articles.map(article => (
    <Article
      key={article.path}
      setSelected={setSelected}
      article={article}
      selected={selected} 
    />
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
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </HTMLTable>
  );
}

export default View;
