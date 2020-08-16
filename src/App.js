import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import valuecontext from './valuecontext';

function App() {
       let value= useState(78);
  return (
    <valuecontext.Provider value={value}>
    <div>
      hello world
    
      <Parent></Parent>
      </div>
     </valuecontext.Provider>
  );
}

export default App;
