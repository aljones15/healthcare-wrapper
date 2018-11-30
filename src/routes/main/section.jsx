import React from 'react';
import {
  Tag, Card,
  Icon, Callout,
  Elevation, Text 
} from "@blueprintjs/core";

function getCallout(title, icon) {
  switch(title) {
    case 'Articles': {
      return(
        <Text>Article</Text>
      );
    }
    case 'States': {
      return (<Text>States</Text>);
    }
    case 'Topics': {
      return (<Text>Topics</Text>);
    }
    case 'Blog': {
      return (<Text>Blog</Text>);
    }
    case 'Questions': {
      return (<Text>Questions</Text>);
    }
    case 'Glossary': {
      return (<Text>Glossary</Text>);
    }
    default:
      throw new Error(`Unknown Section ${title}`);
  }
}

const sectionStyle = {
  margin: '1rem',
  padding: '0rem'
};

export default function({title, icon, path}) {
  return (
    <Card interactive key={title} elevation={Elevation.TWO} style={sectionStyle}>
      <Callout icon={icon} title={title}>
        {getCallout(title, icon)}
        <Tag large icon='link'>
          {title}
        </Tag>
      </Callout>
    </Card>
  );
}
