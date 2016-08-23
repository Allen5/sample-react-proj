
import React, { Component, PropTypes } from 'react';

export default class ButtonAdd extends Component {

  constructor(props) {
	super(props);

	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

	//取值
	const text = this.refs.input.value.trim();

	//触发添加事件
	this.props.onAddClick(text);

	//清空值
	this.refs.input.value = "";
  }

  render() {
	return (
		<div>
			<input type="text" ref="input" />
			<button onClick={ this.handleClick } >
				Add
			</button>
		</div>
	);
  }
  
};

//必须传入onAddClick
ButtonAdd.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
