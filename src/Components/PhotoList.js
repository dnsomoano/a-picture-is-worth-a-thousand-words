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
      list: data
    });
    console.log(typeof this.state.list);
  }

  render() {
    return (
      <section className="body">
        <section className="photo-detail">
          <header>Panda Waving</header>
          <a href="/:category"><img
            src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg"
            alt="PandaWaving"
          /></a>
        </section>
        <section className="photo-detail">
          <header>Großer Panda im Ocean Park, Hongkong</header>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG"
            alt="GroberPanda"
          />
        </section>
      </section>
      // <div>
      //   <ul>
      //     {Object.keys(this.state.list).map((category, i) => {
      //       console.log(category);
      //       console.log(typeof this.state.list[category]);
      //       return (
      //         <section key={i}>
      //           <Link to={"/" + category}>
      //             <header>{this.state.list[category].title}</header>
      //             <p>{this.state.list[category].description}</p>
      //             {/* {this.state.list[category].photos} */}
      //           </Link>
      //         </section>
      //       );
      //     })}
      //   </ul>
      // </div>
    );
  }
}

export default PhotoList;
