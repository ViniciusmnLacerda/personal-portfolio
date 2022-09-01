import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

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
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/skills"
            component={Skills}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
