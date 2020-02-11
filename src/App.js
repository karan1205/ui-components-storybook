import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Button loading startIcon="👻" endIcon="👻" onClick={() => console.log('clicked')} >Click</Button>
    </div>
  );
}

export default App;
