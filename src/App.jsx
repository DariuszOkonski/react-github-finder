import React from 'react';
import './index.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />


      </div>
    </BrowserRouter>
  );
}

export default App;
