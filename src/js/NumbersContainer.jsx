import React, { Component } from 'react';

export default class NumbersContainer extends Component {

  render() {
    return (
      <div id="numbers-frame">
        <div className="well">
          {this.renderNumbers()}
        </div>
      </div>
    );
  }

  renderNumbers() {
    let numbers = [];
    for (var i = 0; i < 9; i++) {
      numbers.push(
        <div className={this.getClassName(i)} onClick={this.props.clickNumber.bind(null, i)}>{i}</div>
      );
    }

    return numbers;
  }

  getClassName(number) {
    return ("number selected-" + (this.props.selectedNumbers.indexOf(number) >= 0));
  }
}
