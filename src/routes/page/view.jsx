import React from 'react';
import { Card, H5, Text, Divider } from '@blueprintjs/core';

const iframeStyle = {
  width: '100%',
  height: '100%',
  padding: '1rem',
  marginTop: '1rem'
};

export default function({data}) {
  const {
    title,
    bite,
    content
  } = data;
  return (
    <Card>
      <H5>{title}</H5>
      <Text>{bite}</Text>
      <Divider />
      <iframe srcDoc={content} style={iframeStyle} />
    </Card>
  );
}
