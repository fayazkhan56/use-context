import React, { useContext } from 'react';
import valuecontext from './valuecontext';

function Child() {
   let value = useContext(valuecontext);
   let updatevalue = value[1];
    return (
      <div>
        hello world  {value}
        <button onClick={()=> {updatevalue(++value[0])} }>update number</button>
      </div>
    );
  }
  
  export default Child;
  