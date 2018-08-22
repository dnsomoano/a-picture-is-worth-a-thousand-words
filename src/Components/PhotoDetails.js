import React, { Component } from 'react';

import data from "./data.json";

class PhotoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: []
        }
    }

    componentDidMount() {
        const eachPhoto = data.filter(ph => ph.id == this.props.match.params.id)[0];
        this.setState({
            photo: eachPhoto
        })
    }

    render() {
        console.log(this.props.match);
        return (
            <div>
                <h1>{this.state.photo.id}</h1>
                <img src={this.state.photo.}
            </div>
        );
    }
}

export default PhotoDetails;
