import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* TODO link dynamically to category user is currently within */}
            <Link to="/pandas">Pandas</Link>
          </li>
          <li>
            <Link to="/miniatures">Miniatures</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
