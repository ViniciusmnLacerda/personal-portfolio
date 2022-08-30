import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/projects"
            component={Projects}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
