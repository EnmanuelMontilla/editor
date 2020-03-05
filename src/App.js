import React from 'react';
import TuiViewer from './TuiViewer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TuiViewer innerHtml={"# hola"}/>
      </header>
    </div>
  );
}

export default App;
