import React from 'react';
import './index.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />

        <div className="container mt-3">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/single-user' render={() => <h1>Single User</h1>} />
            <Route exact path='/multiple-users' render={() => <h1>Multiple Users</h1>} />
            <Route exact path='/about' component={About} />
            <Route render={() => <h1>ERROR</h1>} />
          </Switch>


        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
