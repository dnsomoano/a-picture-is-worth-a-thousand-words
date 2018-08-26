import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import CategoryList from "./Component/CategoryList";
import PhotoList from "./Component/PhotoList";
import PhotoDetail from "./Component/PhotoDetail";
// WORKING ON

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Things Jason Likes
            <h3>Created by Daniel</h3>
            <Nav />
          </header>
          {/* Beginning of connected links */}
          <Switch>
            <Route path="/" exact component={CategoryList} />
            <Route path="/:category" exact component={PhotoList} />
            <Route path="/:category/:index" exact component={PhotoDetail} />
          </Switch>
          {/* End of connected links, beginning of content */}
        </div>
      </Router>
    );
  }
}

export default App;
