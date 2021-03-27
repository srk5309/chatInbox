import React from 'react';
import './App.css';
import Leftheader from './Leftheader';
import Chat from './Chat';
import Type from './Type';

function App() {
  return (
    <div className="app">

      <div className="app_body">
        <Leftheader></Leftheader>
        <Chat></Chat>
        <Type>  </Type>

      </div>
    </div>
  );
}

export default App;
