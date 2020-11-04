import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profil from './components/Profil';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profil" component={Profil} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
