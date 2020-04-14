import React from 'react';
import './index.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />

        <div className="container mt-3">
          <Switch>
            <Route exact path='/' render={() => <h1>Main Page</h1>} />
            <Route exact path='/single-user' render={() => <h1>Single User</h1>} />
            <Route exact path='/multiple-users' render={() => <h1>Multiple Users</h1>} />
            <Route exact path='/about' render={() => <h1>About</h1>} />
            <Route render={() => <h1>ERROR</h1>} />
          </Switch>


        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
