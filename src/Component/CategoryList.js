import React, { Component } from "react";
import hobbies from "../Data/hobbies.json";

class CategoryList extends Component {
  componentDidMount() {
    console.log({ data: hobbies, keys: Object.keys(hobbies) });
  }

  render() {
    return (
      <div className="body">
        {Object.keys(hobbies).map((hobbyKey, i) => {
          return (
            <section className="image-preview" key={i}>
              <header>{hobbies[hobbyKey].title}</header>
              <p>{hobbies[hobbyKey].description}</p>
              <img
                src={hobbies[hobbyKey].photos[0].imageURL}
                alt={hobbies[hobbyKey].photos[0].title}
              />
            </section>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
