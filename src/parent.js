import React, {useContext} from 'react';
import Child from './child';
//import valuecontext from './valuecontext';



function Parent() { 
    //let value = useContext(valuecontext);
    return (
      <div>
          parent
          <Child></Child>
      </div>
    );
  }
  
  export default Parent;
  