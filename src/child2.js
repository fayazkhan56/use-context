import React, { useContext, useReducer } from 'react';
import numberReducer from './numberReducer';
function Child2() {
let [state, dispatch]= useReducer(numberReducer,52);
    return (
      <div>
        child2 {state}
     
        <button onClick={()=> {dispatch{(type:'INCREMENT' val=65)} } }>increment</button>
        <button onClick={()=> {dispatch{(type:'DECREMENT')} }}>decrement</button>

      </div>
    );
  }
   
  export default Child2;
  