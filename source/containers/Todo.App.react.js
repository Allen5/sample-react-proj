// todo app 顶层容器

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilters, VisibilityFilters } from '../actions/todo.actions';
import ButtonAdd from '../components/todoapp/Button.Add.react';
import Footer from '../components/todoapp/Footer.react';
import TodoList from '../components/todoapp/Todo.List.react';

export default class Application extends React.Component {

  constructor(props) {
	super(props);
  }

  render() {

	const { dispatch, visibleTodos, visibilityFilter } = this.props;
	
	return (
	  <div>
	  	<ButtonAdd onAddClick={ text => dispatch(addTodo(text)) } />
	  	<TodoList
	  todos={visibleTodos}
	  onTodoClick={index => dispatch(completeTodo(index)) }
	  		/>
	  	<Footer
	  filter={ visibilityFilter }
	  onFilterChange={ nextFilter => dispatch(setVisibilityFilters(nextFilter))} />
	  </div>
	);	
  }

};

Application.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
	'SHOW_ALL',
	'SHOW_COMPLETED',
	'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch(filter) {
  case VisibilityFilters.SHOW_ALL:
	return todos;
  case VisibilityFilters.SHOW_COMPLETED:
	return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
	return todos.filter(todo => !todo.completed);
  default: return todos;
  }
};

function select(state) {
  return {
	visibleTodos: selectTodos(state.todos, state.visibilityFilter),
	visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(Application);
