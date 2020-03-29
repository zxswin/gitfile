import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './home';
import One from './one';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path={`/`} component={Home} />
          <Route path={`/one`} component={One} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default App;
