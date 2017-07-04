import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from 'tcomb-form';

import { AddUsers as addUsers } from '../../actions';

const Form = t.form.Form;

const Age = t.refinement(t.Number, n => n >= 0);

Age.getValidationErrorMessage = (value, path, context) => 'Age should be integer';

const newUser = t.struct({
  playerName: t.String,
  playerAge: Age,
  playerCity: t.String,
});

const options = {
  fields: {
    playerName: {},
    playerAge: {},
    playerCity: {},
  },
};

class AddUser extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('here');
    this.state = {
      value: {
        playerName: '',
        playerAge: '',
        playerCity: '',
      },
    };
    this.onChange = this.onChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        playerName: '',
        playerAge: '',
        playerCity: '',
      },
    };
  }

  onChange = value => {
    this.setState({
      value,
    });
  };

  handleAddUser = () => {
    const value = this.form.getValue();

    if (value) {
      const data = {
        playerName: value.playerName,
        playerAge: value.playerAge,
        playerCity: value.playerCity,
      };

      console.log(data);

      this.props.addUsers(data);
    }
  };

  render() {
    return (
      <div>
        <h1>Add User Form</h1>
        <Form ref={form => (this.form = form)} type={newUser} options={options} value={this.state.value} onChange={this.onChange} />
        <button onClick={this.handleAddUser}>Add User</button>
      </div>
    );
  }
}

AddUser.propTypes = {
  addUsers: PropTypes.func.isRequired,
};

const selector = state => ({});

export default connect(selector, { addUsers })(AddUser);
