import React from 'react';
import './index.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Error from './Error/Error';
import SingleUser from './SingleUser/SingleUser';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />

        <div className="container mt-3">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/single-user' component={SingleUser} />
            <Route exact path='/multiple-users' render={() => <h1>Multiple Users</h1>} />
            <Route exact path='/about' component={About} />
            <Route component={Error} />
          </Switch>


        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
