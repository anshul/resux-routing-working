import React, { PureComponent } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends PureComponent{


		render(){
			const {todos}  = this.props;
		const listItems = this.props.todos.map( (todo) => <TodoListItem  todo={todo} /> );

		return(
			<ul>
				 {listItems}
			</ul>
		);
	}
	

}

export default TodoList;