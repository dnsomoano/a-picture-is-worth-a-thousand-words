import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import CategoryList from "./Components/CategoryList";
import PhotoList from "./Components/PhotoList";
// import PhotoDetails from "./Components/PhotoDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={CategoryList} />
              <Route path="/:category" exact component={PhotoList} />
              {/* <Route path="/photo-list/:id" exact component={PhotoDetails} /> */}
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
