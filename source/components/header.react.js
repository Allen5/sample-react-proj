// header 组件

import React from 'react';

let headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

let header = React.createClass({

  getDefaultProps: () => {
	return {
	  text: "Default Header"
	};
  },
  
  render: () => {
	return <h2 style={ headerStyle } >{ this.props.text}</h2>;
  }
  
});

module.exports = header;
