import React, { Component } from 'react';

export default class AnswerContainer extends Component {

  render() {
    return (
      <div id="answer-frame">
        <div className="well">
          {this.props.selectedNumbers}
        </div>
      </div>
    );
  }
}
