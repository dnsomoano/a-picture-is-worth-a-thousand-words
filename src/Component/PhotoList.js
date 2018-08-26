import React, { Component } from "react";
import { Link } from "react-router-dom";
import hobbies from "../Data/hobbies.json";

class PhotoList extends Component {

  render() {
    const _category = this.props.match.params.category;
    const _categoryData = hobbies[_category];
    if (!_categoryData) {
      return <h3>404 Not found</h3>;
    } else {
      return (
        <section>
          <header>{_categoryData.title}</header>
          <p>{_categoryData.description}</p>
          <section>
            {_categoryData.photos.map((photo, i) => {
              return (
                <Link to={`/${_category}/${i}`}>
                  <img src={photo.imageURL} alt={photo.title} />
                </Link>
              );
            })}
          </section>
        </section>
      );
    }
  }
}

export default PhotoList;
