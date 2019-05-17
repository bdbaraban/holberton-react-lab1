import React, { ReactElement } from 'react';

const Title = React.memo(function todoTitle(): ReactElement {
  return <h1>Todo-do-do&apos;s</h1>;
});

export default Title;
