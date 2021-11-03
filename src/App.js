import React from 'react';
import './App.css'
import InputA from './components/input';
import Visu from './components/visualizador';
import TextContextProvider from './context/TextContext';

function App() {

  return (
    <div className="container">
        <h1>Context API</h1>
        <TextContextProvider>
          <InputA/>
          <hr/>
          <Visu/>
        </TextContextProvider>
    </div>
  );
}

export default App;
