// Child.js
import React from 'react';

function Child(props) {
  const { name, age } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Child;