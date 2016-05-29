import React, { Component } from 'react';

export default class StarsFrame extends Component {

  render() {
    return (
      <div id="stars-frame">
        <div className="well">
          {this.renderStars()}
        </div>
      </div>
    );
  }

  renderStars() {
    let numberOfStars = this.props.numbersOfStars;
    let stars = [];
    for (var i = 0; i < numberOfStars; i++) {
      stars.push(<span className="glyphicon glyphicon-star"></span>);
    }

    return stars;
  }
}
