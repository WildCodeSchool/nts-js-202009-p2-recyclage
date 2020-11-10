import React from 'react';
<<<<<<< HEAD
import './App.css';
import MissionBoxContainer from './components/MissionBoxContainer';

function App() {
  return (
    <div className="App">
      <MissionBoxContainer />
    </div>
=======
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
>>>>>>> dev
  );
}

export default App;
