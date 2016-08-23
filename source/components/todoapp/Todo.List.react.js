// todo事项列表显示组件

import React, { Component, PropTypes } from 'react';
import Todo from './Todo.react';

export default class TodoList extends Component {

  constructor(props) {
	super(props);
  }

  render() {
  	return (
  		<ul>
  		{this.props.todos.map( (todo, index) => 
  			<Todo {...todo} key={index} onClick={ () => 
  				this.props.onTodoClick(index)} />
  			)}
  		</ul>
  		);
  }

};

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
