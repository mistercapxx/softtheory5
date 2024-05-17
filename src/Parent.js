import React from 'react';
import Child from './Child';

function Parent() {

    const data = {
      name: 'John',
      age: 30
    };
  
    return (
      <div>
        <Child data={data} />
      </div>
    );
  }

  export default Parent;