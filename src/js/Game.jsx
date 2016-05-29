import React, { Component } from 'react';
import StarsContainer from './StarsContainer.jsx';
import ButtonContainer from './ButtonContainer.jsx';
import AnswerContainer from './AnswerContainer.jsx';
import NumbersContainer from './NumbersContainer.jsx';

export default class Game extends Component {

  state = {
    numbersOfStars: Math.floor(Math.random() * 9) + 1,
    selectedNumbers: []
  };

  render() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>

        <div className="clearfix">
          <StarsContainer numbersOfStars={this.state.numbersOfStars} />
          <ButtonContainer />
          <AnswerContainer selectedNumbers={this.state.selectedNumbers} />
        </div>
        
        <NumbersContainer selectedNumbers={this.state.selectedNumbers}
                          clickNumber={this.clickNumber.bind(this)} />
      </div>
    );
  }

  clickNumber(number) {
    if (this.state.selectedNumbers.indexOf(number) >= 0) return;

    this.setState({
      selectedNumbers: this.state.selectedNumbers.concat(number)
    });
  }
}
