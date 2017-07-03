import React, { PureComponent } from 'react';


class TodoListItem extends PureComponent{

	render(){
		
	
		const { task} = this.props.todo;
		return(
			<li >
				<span >{task}</span>
			</li>
		);
	}

}

export default TodoListItem;