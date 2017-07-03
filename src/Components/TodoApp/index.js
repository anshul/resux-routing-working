import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { onTodoSubmit } from '../../actions';
import Header from './Header';
import AddTodo from './AddTodo';

import './index.css'

class Todo extends Component {

  render() {
    
  	const { todos } = this.props;
    
    return (
      <div className="wrapper">
        <Header />
        <AddTodo onTodoSubmit={this.props.onTodoSubmit} />
      	<TodoList todos={todos}/>
      </div>
    );
  }


}

const selected = state => {

	return {

		todos:state.Todo

	}
}

export default connect (selected,{onTodoSubmit})(Todo)
//export default connect (selected,{})(Todo)

