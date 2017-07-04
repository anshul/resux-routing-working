import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mins: 0,
      secs: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const secs = this.state.secs + 1;
      const mins = secs >= 60 ? this.state.mins + 1 : this.state.mins;
      this.setState({ mins, secs: secs % 60 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>{this.state.mins}:{this.state.sec < 10 ? `0${this.state.secs}` : this.state.secs}</p>
        <p>{this.props.title}</p>
        <ul>
          <li>
            <Link to={'/todo'}>Todo List</Link>
          </li>
          <li>
            <Link to={'/tictacteo'}>Tic Tac Teo</Link>
          </li>
          <li>
            <Link to={'/addUser'}>Add Users</Link>
          </li>
          <li>
            <Link to={'/displayUser'}>Display User</Link>
          </li>
        </ul>

      </div>
    );
  }
}

Sidebar.PropTypes = {
  title: PropTypes.string.isRequired,
};

const selector = state => ({ title: state.config.title });

export default connect(selector, {})(Sidebar);
