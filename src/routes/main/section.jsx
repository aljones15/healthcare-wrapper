import React from 'react';
import {
  Tag, Card,
  Icon, Callout,
  Elevation, Text 
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';

function getCallout(title, icon) {
  switch(title) {
    case 'Articles': {
      return(
        <Text>Your health is important and our Articles will walk you through everything from tax exemptions (subsidize your hottub) to Insurance Provider Ratings  </Text>
      );
    }
    case 'States': {
      return (<Text>Get information about Health Care in each State</Text>);
    }
    case 'Topics': {
      return (<Text>See a list of common Health Care topics</Text>);
    }
    case 'Blog': {
      return (<Text>Stay current with the latest blog posts from the U.S. Health Care's Buraeu</Text>);
    }
    case 'Questions': {
      return (<Text>Browse our FAQ to find informative answers to the maelstrom of Health related questions</Text>);
    }
    case 'Glossary': {
      return (<Text>Our Glossary providers easy and well indexed references to help get you up to speed on health care</Text>);
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
        <Link to={path}>
          <Tag large icon='link'>
            {title}
          </Tag>
        </Link>
      </Callout>
    </Card>
  );
}
