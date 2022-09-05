import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProjectsBackEnd from './pages/ProjectsBackEnd';
import ProjectsFrontEnd from './pages/ProjectsFrontEnd';
import ProjectsMenu from './pages/ProjectsMenu';
import Skills from './pages/Skills';
import Thanks from './pages/Thanks';

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
            component={ProjectsMenu}
          />
          <Route
            exact
            path="/projects/front-end"
            component={ProjectsFrontEnd}
          />
          <Route
            exact
            path="/projects/back-end"
            component={ProjectsBackEnd}
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
          <Route
            exact
            path="/thanks"
            component={Thanks}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
