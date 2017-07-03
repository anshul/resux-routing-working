import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class Result extends Component {
  render () {
    let result = ''; 
    if (this.props.turn) {
      result = "Now "+this.props.turn + " Turn";
    }
    if (this.props.won || this.props.draw) {
      if(this.props.won ){
        result = this.props.won + " won the game";
      }else{
        result = "Game Over!!!";
      }
      

    }
    return (
      <div>
        <p>
          {result}
          <button  onClick={this.props.resetGame}>Reset Game</button>
        </p>
      </div>
    );
  }
}
Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default connect(
  ({won, turn, draw}) => ({
    won, turn, draw
  })
)(Result);