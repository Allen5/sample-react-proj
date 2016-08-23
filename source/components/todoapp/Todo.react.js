//显示单条todo事项的组件

import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

  constructor(props) {
	super(props);
  }

  render() {

	return (
		<li onClick={ this.props.onClick } style={{
			textDecoration: this.props.completed ? 'line-through' : 'none',
			cursor: this.props.completed ? 'default' : 'pointer'
		}}>
			{this.props.text}
		</li>
	);
	
  }
  
};

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
