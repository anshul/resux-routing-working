import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import s from './styles';
import Board from './components/Board';
import Result from './components/Result';
//import { resetGame } from '../actions/ResetBoard';
import { makeYourMove } from '../../actions';


const TicTacTeoApp = props =>
  <div>
    <h1>Tic Tac Teo App</h1>
    <Result
      turn={props.turn}
      won={props.won}
      draw={props.draw}
    />
    <Board board={props.board} onSquareClick={props.markSquare} />
  </div>;




const selector = state => ({ tictacteo: state.tictacteo });

export default connect(selector, { makeYourMove })(TicTacTeoApp);


