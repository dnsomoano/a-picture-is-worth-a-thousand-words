import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import CategoryList from "./Component/CategoryList";
import PhotoList from "./Component/PhotoList";
// import PhotoDetails from "./Components/PhotoDetails";

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
            {/* <Route path="/photo-list/[0]" exact component={PhotoDetails} /> */}
          </Switch>
          {/* End of connected links, beginning of content */}
          <CategoryList />
        </div>
      </Router>
    );
  }
}

export default App;
