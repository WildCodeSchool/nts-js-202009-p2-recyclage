import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Profil from './components/Profil';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: "",
    };
    this.barChangedHome = this.barChangedHome.bind(this);
  }

  barChangedHome(jauge) {
    this.setState({
      bar: jauge,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home barChangedHome={this.barChangedHome} />
            </Route>
            <Route path="/profil">
              <Profil jauge={this.state.bar} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
