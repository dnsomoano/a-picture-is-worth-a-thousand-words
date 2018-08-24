import React, { Component } from "react";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <section className="body">
          <header>Panda Bears</header>
          <p>
            Pandas are bears native to south-central China, and are objectively
            the cutest animals on earth.
          </p>
          <img
            src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg"
            alt="PandaWaving"
          />
        </section>
      </div>
    );
  }
}

export default CategoryList;
