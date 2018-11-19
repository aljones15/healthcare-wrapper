import React from 'react';
import { Alert } from '@blueprintjs/core';

export function NotFound({history}) {
  return (
    <Alert isOpen icon='trash' onConfirm={() => history.push('/') }>
      <p>404 Not Found</p>
    </Alert>
  );
}

export default NotFound;
