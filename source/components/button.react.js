// 按钮组件

import React from 'react';

let buttonStyle = {
  margin: "10px 10px 10px 0"
};

class Button extends React.Component {

  constructor(props) {
	super(props);
  }

  render() {
	return (
		<button
			className="btn btn-default"
			style={buttonStyle}
			onClick={this.props.handleClick}>
			{this.props.label}
		</button>
	);
  }
  
};

export default Button;
