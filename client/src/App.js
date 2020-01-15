import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/pages/login";
import Main from "./components/pages/main"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          {/* <Route exact path="/" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
