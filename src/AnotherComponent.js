import React from 'react';
import ParentComponent from './ParentComponent';

function AnotherComponent() {
  return (
    <div>
      <h1>Another Component</h1>
      <ParentComponent />
    </div>
  );
}

export default AnotherComponent;
