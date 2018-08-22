import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import data from "./data.json";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    console.log(data);
    console.log(data["pandas"].photos[0].title);
    this.setState({
      list: Object.keys(data)
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((category) => {
            console.log(category);
            return (
              <li key={i}>
                <Link to={"/photo-list/"}>
                  {category.title}
                  {category.description}
                  {category.photos}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PhotoList;
